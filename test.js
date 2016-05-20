import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow} from 'enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

const ButtonComponent = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
})

describe('Issue #404', () => {
  it('Should call the onClick prop when click is simulated', () => {
    const mockOnClick = sinon.spy();
    const wrapper = shallow(<ButtonComponent onClick={mockOnClick}/>);
    wrapper.find('button').simulate('click');
    expect(mockOnClick.calledOnce).to.be.true;
  });
})
