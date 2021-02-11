import React from 'react'

import Fork from './'

import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Fork',
  component: Fork,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <Safe width={300} height={300} safe={10} />
    <Fork {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = { x1: 150, y1: 290, length: 280 }
