import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {
  render() {
    return (
      <div className="foo" data-index="5">
          <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue #478', () => {
  it('should find elements with quoted data attribut values', () => {
    const wrapper = mount(<TestComponent/>);
    expect(wrapper.find('.foo[data-index="5"]')).to.have.length(1);
  });
})
