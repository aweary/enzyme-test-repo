import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

class TestComponent extends React.Component {
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

describe('Issue #785', () => {
  it('should call lifecycle methods on mount/unmount', () => {
    const willMount = sinon.spy();
    const didMount = sinon.spy();
    const willUnmount = sinon.spy();

    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.componentWillUnmount = willUnmount;
        this.componentWillMount = willMount;
        this.componentDidMount = didMount;
      }
      render() {
        return (
          <div className={this.props.id}>
            {this.props.id}
          </div>
        );
      }
    }
    const wrapper = mount(<Foo id="foo" />);
    expect(willMount.callCount).to.equal(1);
    expect(didMount.callCount).to.equal(1);
    expect(willUnmount.callCount).to.equal(0);
    wrapper.unmount();
    expect(willMount.callCount).to.equal(1);
    expect(didMount.callCount).to.equal(1);
    expect(willUnmount.callCount).to.equal(1);
  });
})
