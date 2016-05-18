import React from 'react';
import Select from 'react-select';


const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
]

export default class ReactSelectTestComponent extends React.Component {


  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <Select
          name='test'
          value='one'
          options={options}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
