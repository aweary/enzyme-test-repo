import React from 'react';

const HOCTestComponent = ({children}) => (
  <div>{children}</div>
)

const SFCTextTestComponent = ({ text }) => (
  <HOCTestComponent>{text}</HOCTestComponent>
)

export default SFCTextTestComponent
