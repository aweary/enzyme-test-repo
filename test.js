import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('AN EXAMPLE TEST SUITE', () => {
  it('ENTER YOUR DESCRIPTION HERE', () => {
    const wrapper = mount(<TestComponent/>);
    expect(true).to.equal(true);
  });
})
