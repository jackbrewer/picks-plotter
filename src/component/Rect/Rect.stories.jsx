import React from 'react'
import Frame from '../../structure/Frame'
import Svg from '../Svg'

import Rect from './'

export default {
  title: 'Primitive/Rect',
  component: Rect,
}

const Template = (args) => (
  <Frame>
    <Svg width={300} height={300}>
      <Rect {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  x: 10,
  y: 10,
  width: 280,
  height: 280,
  rx: 0,
  ry: 0,
}
Default.argTypes = {
  x: { control: { type: 'range', min: 0, max: 300 } },
  y: { control: { type: 'range', min: 0, max: 300 } },
  width: { control: { type: 'range', min: 0, max: 300 } },
  height: { control: { type: 'range', min: 0, max: 300 } },
  rx: { control: { type: 'range', min: 0, max: 300 } },
  ry: { control: { type: 'range', min: 0, max: 300 } },
}
