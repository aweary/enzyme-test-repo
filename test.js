import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <label>Test</label>
        <input name='test' defaultValue='test'/>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue #402', () => {
  it('should find the input using defaultValue', () => {
    const wrapper = mount(<TestComponent/>);
    expect(wrapper.find({defaultValue: 'test'})).to.have.length(1);
  });
})
