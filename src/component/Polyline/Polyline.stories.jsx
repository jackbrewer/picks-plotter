import React from 'react'
import Frame from '../../structure/Frame'
import Svg from '../Svg'

import Polyline from './'

export default {
  title: 'Primitive/Polyline',
  component: Polyline,
}

const Template = (args) => (
  <Frame>
    <Svg width={300} height={300}>
      <Polyline {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  points: [
    [10, 10],
    [290, 290],
    [70, 150],
  ],
}
