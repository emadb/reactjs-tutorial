var Container = React.createClass({
  getInitialState: function(){
    return {
      todos: TodoStore.getAll(),
      todo: ''
    }
  },
  componentDidMount: function(){
    TodoStore.addSubscriber(this.onChange);
  },
  componentWillUnmount: function () {
    TodoStore.removeSubscriber(this.onChange);    
  },
  onChange: function(){
    var todos = TodoStore.getAll();
    this.setState({todos: todos});
  },
  handleClick:  function(){
    this.setState({todo: ''});
    TodoActions.create(this.state.todo);
  },
  handleChange: function(event) {
    this.setState({todo: event.target.value});
  },
  render: function() {
    var items = this.state.todos.map(function(t){
      return <TodoItem key={t} text={t} />;
    });
    return (
      <div>
        <input type="text" value={this.state.todo} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Change title</button>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

var TodoItem = React.createClass({
  render: function(){
    return (<li>{this.props.text}</li>);
  }  
});

// FLUX
var AppDispatcher = new Flux.Dispatcher();
var TodoConstants = {
  TODO_CREATE: 'TODO_CREATE'
};

// ACTIONS
var TodoActions = {
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  }
};

// STORE
var TodoStore = {
  _items: ['learn javascript', 'write some code'],
  _subscribers: [],
  create: function(text){
    this._items.push(text);
    this.emitChange();
  },
  getAll: function(){
    return this._items;
  },
  emitChange: function(){
    this._subscribers.forEach(function(s){
      s();
    });
  },
  addSubscriber: function(callback){
    this._subscribers.push(callback);
  },
  removeSubscriber: function(callback){
    var index = this._subscribers.indexOf(callback);
    this._subscribers.splice(index, 1);
  }
};

// DISPATCHER
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      TodoStore.create(action.text);
      break;
  }  
});

React.render(
  <Container/>,
  document.body
);