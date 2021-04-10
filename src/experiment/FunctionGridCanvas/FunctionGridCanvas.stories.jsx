import React from 'react'

import FunctionGridCanvas from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/FunctionGridCanvas',
  component: FunctionGridCanvas,
}

const Template = (args) => (
  <Frame name="FunctionGridCanvas">
    <FunctionGridCanvas {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 600,
  height: 600,
  cols: 256,
  rows: 256,
}
