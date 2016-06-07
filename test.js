import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input onKeyDown={this.props.onKeyDown} />
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue #331', () => {
  it('It should simulate keydown events', () => {
    const onKeyDown = sinon.spy();
    const wrapper = mount(<TestComponent onKeyDown={onKeyDown}/>);
    const input = wrapper.find('input');
    input.simulate('keyDown', {keyCode: 40});
    expect(onKeyDown.called).to.be.true;
  });
})
