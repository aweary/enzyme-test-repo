import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

const firstClass = 'foo'
const secondClass = 'bar'

const transformedFirstClass = firstClass + '-'
const transformedSecondClass = secondClass

const controlClassName = `${firstClass} ${secondClass}`
const controlQuery = `.${firstClass}.${secondClass}`

const testClassName = `${transformedFirstClass} ${transformedSecondClass}`;
const testQuery = `.${transformedFirstClass}.${transformedSecondClass}`;

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <div className={testClassName}>
          <h3>Testing</h3>
        </div>
        <div className={controlClassName}>
          <h3>Another Testing</h3>
        </div>
      </div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue 413', () => {

  before(() => {
    console.log(`The control class name is ${controlClassName}`);
    console.log(`The test class name is ${testClassName}`);
    console.log(`The control query is ${controlClassName}`);
    console.log(`The test query is ${testQuery}`);
  });

  it('should find elements via .find() with alphabetical class names', () => {
    const wrapper = mount(<TestComponent />);
    expect(wrapper.find(controlQuery)).to.have.length(1);
  })
  it('It should find elements with transformed class names', () => {
    const wrapper = mount(<TestComponent />);
    expect(wrapper.find(testQuery)).to.have.length(1);
  });
})
