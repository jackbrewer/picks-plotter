import React from 'react'

import Shine from './'

import Svg from '../../../../component/Svg'

export default {
  title: 'Christmas/Shine',
  component: Shine,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Shine {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = {
  r: 140,
  r2: 0.86,
  cx: 140,
  cy: 140,
}

export const Lines = Template.bind({})
Lines.args = {
  ...Default.args,
  lines: true,
  linesLength: 0.9,
}
