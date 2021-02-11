import React from 'react'

import Hexagon from './'

import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Hexagon',
  component: Hexagon,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Safe width={300} height={300} safe={10} />
    <Hexagon {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = { r: 140, cx: 150, cy: 150 }
