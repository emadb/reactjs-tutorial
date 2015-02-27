var Container = React.createClass({
  getInitialState: function(){
    return {
      todos: ['learn javascript', 'write some code'],
      todo: ''
    }
  },
  handleClick:  function(){
    this.state.todos.push(this.state.todo);
    this.setState({todos: this.state.todos});
    this.setState({todo: ''});
  },
  handleChange: function(event) {
    this.setState({todo: event.target.value});
  },
  render: function() {
    var items = this.state.todos.map(function(t){
      return <TodoItem text={t} />;
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

React.render(
  <Container/>,
  document.body
);