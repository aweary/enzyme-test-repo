import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from './enzyme/build/index';

import TestComponent from './src';

chai.use(chaiEnzyme());


class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('A failing a test suite', () => {
  it('should be an example of a failing test suite', () => {
    const wrapper = mount(<TestComponent name='testing'/>);
    expect(wrapper.find('h1').length).to.equal(1)
  })
})
