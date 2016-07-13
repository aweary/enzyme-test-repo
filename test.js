import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';

chai.use(chaiEnzyme());

class Foo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
          {this.props.foo}
      </div>
    );
  }
}


/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Issue 497', () => {
  it('should return a ReactElement from get()', () => {
    const wrapper = mount(<Foo foo='foo' />);
    expect(React.isValidElement(wrapper.get(0))).to.equal(true)
  });
})
