var ClickCounter = React.createClass({
  getInitialState: function(){
    console.log('getInitialState');
    return {count: 0};
  },
  handleClick: function(){
    console.log('handleClick');
    this.state.count++;
    this.setState({count: this.state.count});
  },
  render: function() {
    console.log('rendering....');
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        <span> {this.state.count} </span>
      </div>
      );
    }
  });

React.render(<ClickCounter/>, document.body);