import React from 'react'
import Frame from '../../structure/Frame'
import Svg from '../Svg'

import Line from './'

export default {
  title: 'Primitive/Line',
  component: Line,
}

const Template = (args) => (
  <Frame>
    <Svg width={300} height={300}>
      <Line {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  x1: 10,
  y1: 10,
  x2: 290,
  y2: 290,
}
Default.argTypes = {
  x1: { control: { type: 'range', min: 1, max: 300 } },
  y1: { control: { type: 'range', min: 1, max: 300 } },
  x2: { control: { type: 'range', min: 1, max: 300 } },
  y2: { control: { type: 'range', min: 1, max: 300 } },
}
