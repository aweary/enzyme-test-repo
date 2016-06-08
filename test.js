import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

class BigCode extends React.Component {

  render() {
    return (
      <div>
        <span className='foo'>{this.props.code}</span>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Starys issue in Discord', () => {
  it('It query a single prop', () => {
    const wrapper = mount(<BigCode code='test'/>);
    expect(wrapper.prop('code')).to.equal('test');
  });
})
