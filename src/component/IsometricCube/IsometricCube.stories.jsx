import React from 'react'

import IsometricCube from '../IsometricCube'
import Svg from '../Svg'

export default {
  title: 'Shape/IsometricCube',
  component: IsometricCube,
}

const Template = (args) => (
  <Svg width={300} height={300}>
    <IsometricCube {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = {
  height: 300,
  hatchTop: 3,
  hatchTop2: 3,
  hatchLeft: 5,
  hatchLeft2: 5,
  hatchRight: 7,
  hatchRight2: 7,
}
