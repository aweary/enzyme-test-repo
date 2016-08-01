import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class Foo extends React.Component {
  render() {
    return (
      <div>Foo {this.props.foo}</div>
    )
  }
}

class Bar extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}


describe('Issue #510', () => {
  it('some() should return true if the component exists', () => {
    const wrapper = mount(
      <Bar>
          <Foo foo='foo'/>
      </Bar>
    );
    expect(wrapper.find(Foo)).to.have.length(1);
    expect(wrapper.some(Foo)).to.equal(true);
  });
})
