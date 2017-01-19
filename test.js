import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow} from 'enzyme';

chai.use(chaiEnzyme());

class RendersAZero extends React.Component {
  render() {
    return (
      <div>{[].length && '1'}</div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue #766', () => {
  it('renders 0 when doing [].length && 1', () => {
    const wrapper = shallow(<RendersAZero/>);
    expect(wrapper.html()).to.equal('<div>0</div>');
  });
})
