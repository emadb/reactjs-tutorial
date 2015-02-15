var Container = React.createClass({
  render: function() {
    return (
      <div>
        <Title text="Hello react"/>
        <SubTitle text="A library for web components"/>
      </div>
    );
  }
});

var Title = React.createClass({
  render: function() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
});

var SubTitle = React.createClass({
  render: function() {
    return (
      <h3>{this.props.text}</h3>
    );
  }
});

React.render(
  <Container />,
  document.getElementById('container')
);