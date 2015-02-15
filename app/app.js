var Container = React.createClass({
  render: function() {
    return (
      <div>
        <Title text={this.props.titleText}/>
        <SubTitle text={this.props.subtitleText}/>
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
  <Container titleText="Hello react" subtitleText="A library for web components"/>,
  document.getElementById('container')
);