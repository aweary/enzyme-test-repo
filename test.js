import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount, shallow} from 'enzyme';

chai.use(chaiEnzyme());

class MockLink extends React.Component {
  render() {
    return (
      <a href={this.props.to}>{this.props.children}</a>
    )
  }
}

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <MockLink to='/'>Link Name</MockLink>
        <MockLink to='/another'>Another Link Name</MockLink>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('.find(prop) parity between mount and shallow', () => {
  it('should work with shallow', () => {
    const wrapper = shallow(<TestComponent/>);
    expect(wrapper.find({to: '/'})).to.have.length(1);
  });
  it('should work with mount', () => {
    const wrapper = mount(<TestComponent/>);
    expect(wrapper.find({to: '/'})).to.have.length(1);
  })
})
