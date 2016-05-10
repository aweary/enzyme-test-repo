import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class TestSVGComponent extends React.Component {
  render() {
    return (
      <svg className='test' height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red" />
      </svg>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('mount() and SVG support', () => {
  it('should call methods that use findDOMNode on SVGs without an error', () => {
    const wrapper = mount(<TestSVGComponent/>);
    expect(wrapper.find('.test')).to.have.length(1);
  });
})
