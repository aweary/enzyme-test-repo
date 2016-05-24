import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount} from 'enzyme';
chai.use(chaiEnzyme());


class App extends React.Component {
  render() {
    return (
      <div>Hello, world</div>
    );
  }
}

/**
 * Change the `describe` and `it` block so it acurately describes
 * the test that you are trying to reproduce.
 */

describe('Repro case for issue #401', () => {
  it('shouldnt throw when calling parent() in findWhere()', () => {
    const wrapper = mount(<App/>);
    wrapper.findWhere(n => n.parent())
  });
})
