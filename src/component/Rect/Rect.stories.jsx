import React from 'react'

import Rect from './'

import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Rect',
  component: Rect,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Safe width={300} height={300} safe={10} />
    <Rect {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = { x: 10, y: 10, width: 280, height: 280, rx: 0, ry: 0 }
Default.argTypes = {
  x: { control: { type: 'range', min: 0, max: 300 } },
  y: { control: { type: 'range', min: 0, max: 300 } },
  width: { control: { type: 'range', min: 0, max: 300 } },
  height: { control: { type: 'range', min: 0, max: 300 } },
  rx: { control: { type: 'range', min: 0, max: 300 } },
  ry: { control: { type: 'range', min: 0, max: 300 } },
}
