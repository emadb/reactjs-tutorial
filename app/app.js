var Container = React.createClass({
  render: function() {
    return (
      <div>
        <Title />
        <SubTitle />
      </div>
    );
  }
});

var Title = React.createClass({
  render: function() {
    return (
      <h1>Hello React</h1>
    );
  }
});

var SubTitle = React.createClass({
  render: function() {
    return (
      <h3>A library for web components</h3>
    );
  }
});

React.render(
  <Container />,
  document.getElementById('container')
);