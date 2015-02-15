var Title = React.createClass({
  render: function() {
    return (
      <h1>Hello React</h1>
    );
  }
});


React.render(
  <Title />,
  document.getElementById('container')
);