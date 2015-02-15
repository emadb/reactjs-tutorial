var Container = React.createClass({
  render: function() {
    return (
      <div>
        <Title text={this.props.titleText}/>
      </div>
    );
  }
});

var Title = React.createClass({
  getInitialState: function(){
    return {
      text: 'default title text'
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