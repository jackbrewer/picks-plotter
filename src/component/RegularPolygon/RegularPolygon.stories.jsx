import React from 'react'
import Svg from '../Svg'
import Frame from '../../structure/Frame'

import RegularPolygon from './'

export default {
  title: 'Primitive/RegularPolygon',
  component: RegularPolygon,
}

const Template = (args) => (
  <Frame>
    <Svg width={300} height={300}>
      <RegularPolygon {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  r: 140,
  cx: 150,
  cy: 150,
  sides: 5,
  rotation: 0,
}
Default.argTypes = {
  cx: { control: { type: 'range', min: 1, max: 300 } },
  cy: { control: { type: 'range', min: 1, max: 300 } },
  r: { control: { type: 'range', min: 1, max: 300 } },
  sides: { control: { type: 'range', min: 3, max: 20 } },
  rotation: { control: { type: 'range', min: 0, max: 359 } },
}
