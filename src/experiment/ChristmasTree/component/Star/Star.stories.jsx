import React from 'react'

import Star from './'

import Svg from '../../../../component/Svg'

export default {
  title: 'Christmas/Star',
  component: Star,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Star {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = {
  r: 140,
  r2: 0.4,
  cx: 140,
  cy: 140,
}

export const Lines = Template.bind({})
Lines.args = {
  ...Default.args,
  lines: true,
  linesLength: 0.9,
}
