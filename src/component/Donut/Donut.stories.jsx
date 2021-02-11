import React from 'react'

import Donut from './'

import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Donut',
  component: Donut,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Safe width={300} height={300} safe={10} />
    <Donut {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = { cx: 150, cy: 150, r1: 140, r2: 100 }
Default.argTypes = {
  r1: { control: { type: 'range', min: 1, max: 250 } },
  r2: { control: { type: 'range', min: 1, max: 250 } },
}
