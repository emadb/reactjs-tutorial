var Container = React.createClass({
  render: function() {
    return (
      <div>
        <Title text="Hello react"/>
      </div>
    );
  }
});

var Title = React.createClass({
  getInitialState: function(){
    return {
      text: this.props.text
    }
  },
  render: function() {
    return (
      <h1>{this.state.text}</h1>
    );
  }
});

React.render(
  <Container />,
  document.getElementById('container')
);