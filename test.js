import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';
import sinon from 'sinon'
chai.use(chaiEnzyme());

import DemoApp from './src'

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

 describe('DemoApp Test', () => {
     it('should not show "failure" in console', () => {
        sinon.spy(console, 'log')
        const wrapper = mount(<DemoApp />);
        const input = wrapper.find(".input-group-addon");
        input.simulate("click");
        expect(console.log.args[0][0]).to.equal('failure')
     });
 })
