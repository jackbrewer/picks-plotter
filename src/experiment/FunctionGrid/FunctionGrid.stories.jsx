import React from 'react'

import FunctionGrid from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/FunctionGrid',
  component: FunctionGrid,
}

const Template = (args) => (
  <Frame name="FunctionGrid">
    <FunctionGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 400,
  height: 400,
  cols: 19,
  rows: 19,
}
