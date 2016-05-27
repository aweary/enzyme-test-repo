import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 data-foo='foo bar'>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue 416', () => {
  it('Should query attributes with spaces in their values', () => {
    const wrapper = mount(<TestComponent/>);
    expect(wrapper.find('[data-foo="foo bar"]')).to.have.length(1)
  });
})
