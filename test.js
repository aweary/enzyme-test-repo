import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {
  render() {
    return (
      <div data-foo='foo.bar'>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}


describe('Issue #439', () => {
  it('should find attributes with dots in the value', () => {
    const wrapper = mount(<TestComponent/>);
    expect(wrapper.find('[data-foo="foo.bar"]')).to.have.length(1);
  });
})
