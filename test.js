import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from './enzyme/build/index';
chai.use(chaiEnzyme());


const Product = ({ price, quantity, title }) =>
    <div> {title} - &#36;{price} {quantity ? `x ${quantity}` : null} </div>



/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('A failing a test suite', () => {
  it('fails when trying to call `text()` on an SFC', () => {
    const component = mount(<Product price={20} quantity={4} title='item'/>);
    component.text();
  })
})
