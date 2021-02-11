import React from 'react'

import Polygon from './'

import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Polygon',
  component: Polygon,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Safe width={300} height={300} safe={10} />
    <Polygon {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = {
  r: 140,
  cx: 150,
  cy: 150,
  corners: 3,
  rotationOffset: 30,
}
