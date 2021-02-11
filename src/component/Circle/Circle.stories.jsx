import React from 'react'

import Circle from './'

import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Circle',
  component: Circle,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Safe width={300} height={300} safe={10} />
    <Circle {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = { cx: 150, cy: 150, r: 140 }
Default.argTypes = {
  r: { control: { type: 'range', min: 1, max: 250 } },
}
