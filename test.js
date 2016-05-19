import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

import SFCTextTestComponent from './src';

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue #401', () => {
  it('should be able to query text on an SFC with mount', () => {
    const wrapper = mount(<SFCTextTestComponent text='test'/>);
    expect(wrapper.text().includes('test')).to.be.true;
  });
})
