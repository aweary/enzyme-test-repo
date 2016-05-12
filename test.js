import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow, mount} from 'enzyme';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {

  static defaultProps = {
    name: 'Brandon'
  }

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

describe('defaultProps', () => {
  it('It should parse defaultProps with mount', () => {
    const wrapper = mount(<TestComponent/>);
    expect(wrapper.props().name).to.equal('Brandon')
  });
  it('It should parse defaultProps with shallow', () => {
    const wrapper = shallow(<TestComponent/>);
    expect(wrapper.props().name).to.equal('Brandon')
  });
})
