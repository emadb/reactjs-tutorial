var Container = React.createClass({
  getInitialState: function(){
    return {
      title: this.props.title
    }
  },
  handleClick:  function(){
    this.setState({title: 'Updated title'});
  },
  render: function() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleClick}>Change title</button>
      </div>
    );
  }
});

React.render(
  <Container title='Hello react' />,
  document.getElementById('container')
);