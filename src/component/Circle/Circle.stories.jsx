import React from 'react'
import Frame from '../../structure/Frame'
import Svg from '../Svg'

import Circle from './'

export default {
  title: 'Primitive/Circle',
  component: Circle,
}

const Template = (args) => (
  <Frame>
    <Svg width={300} height={300}>
      <Circle {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = { cx: 150, cy: 150, r: 125 }
Default.argTypes = {
  cx: { control: { type: 'range', min: 1, max: 300 } },
  cy: { control: { type: 'range', min: 1, max: 300 } },
  r: { control: { type: 'range', min: 1, max: 300 } },
}
