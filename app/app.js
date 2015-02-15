var Container = React.createClass({
  getInitialState: function(){
    return {
      title: this.props.title,
      newTitle: 'new title'
    }
  },
  handleClick:  function(){
    this.setState({title: this.state.newTitle});
  },
  handleChange: function(event) {
    this.setState({newTitle: event.target.value});
  },
  render: function() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input type="text" value={this.state.newTitle} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Change title</button>
      </div>
    );
  }
});

React.render(
  <Container title='Hello react' />,
  document.getElementById('container')
);