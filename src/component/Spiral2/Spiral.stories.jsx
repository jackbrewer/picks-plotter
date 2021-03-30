import React from 'react'

import Spiral2 from './'

import Frame from '../Frame'
import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Spiral2',
  component: Spiral2,
}

const Template = (args) => (
  <Frame name="Spiral2">
    <Svg width={500} height={500} viewBox="0 0 500 500">
      <Safe width={500} height={500} safe={10} />
      <Spiral2 {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  numPoints: 200,
  pointRadius: 5,
  angleDiff: 3,
  distance: 1.5,
}
