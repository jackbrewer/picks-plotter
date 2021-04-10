import React from 'react'
import Frame from '../../structure/Frame'
import Svg from '../Svg'

import Hexagon from './'

export default {
  title: 'Primitive/Hexagon',
  component: Hexagon,
}

const Template = (args) => (
  <Frame>
    <Svg width={300} height={300}>
      <Hexagon {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = { r: 140, cx: 150, cy: 150 }
Default.argTypes = {
  cx: { control: { type: 'range', min: 1, max: 300 } },
  cy: { control: { type: 'range', min: 1, max: 300 } },
  r: { control: { type: 'range', min: 1, max: 300 } },
  rotation: { control: { type: 'range', min: 0, max: 359 } },
}
