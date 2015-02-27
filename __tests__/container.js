jest.dontMock('../app/app.js');

describe('Container', function() {
  it('add new todo items', function() {
    var React = require('react/addons');    
    var TestUtils = React.addons.TestUtils;
    var Container = require('../app/app.js');

    var container = TestUtils.renderIntoDocument(
      <Container />
    );

    // input should be empty
    var input = TestUtils.findRenderedDOMComponentWithTag(container, 'input');
    expect(input.getDOMNode().value).toEqual('');

    // now input should contains test
    input.getDOMNode().value = 'test';
    expect(input.getDOMNode().value).toEqual('test');

    //Simulate a click
    var button = TestUtils.findRenderedDOMComponentWithTag(
      container, 'button');
    TestUtils.Simulate.click(button);

    // Should
    var lis = TestUtils.scryRenderedDOMComponentsWithTag(container, 'li');
    expect(lis.length).toEqual(3);
    
    // input should be blanked
    expect(input.getDOMNode().value).toEqual('');
  });
});