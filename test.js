import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount, shallow} from 'enzyme';

chai.use(chaiEnzyme());

class Foo extends React.Component {
  render() {
    return <div />
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('CSS selector parity', () => {
  it('should work with mount', () => {
    const wrapper = mount(
      <div>
          <Foo bar='baz' />
      </div>
    );
    expect(wrapper.find('Foo[bar="baz"]')).to.have.length(1);
  });
  it('should work with shallow', () => {
    const wrapper = shallow(
      <div>
          <Foo bar='baz' />
      </div>
    );
    expect(wrapper.find('Foo[bar="baz"]')).to.have.length(1);
  });
})
