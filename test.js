import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow} from 'enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

import ReactSelectTestComponent from './src';

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('react-select', () => {
  it('should call onChange with shallow', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<ReactSelectTestComponent onChange={onChange}/>);
    const selectWrapper = wrapper.find('Select');
    selectWrapper.simulate('change');
    expect(onChange.called).to.be.true;
  });
})
