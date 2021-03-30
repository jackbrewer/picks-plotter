import React from 'react'

// import sampleSeeded from '../../lib/sample-seeded'
// import mapRange from '../../lib/map-range'

import ChristmasTree from './'
import Frame from '../../component/Frame'

// import Hexagon from '../../component/Hexagon'
// import IsometricCube from '../../component/IsometricCube'
// import generateBinaryBytes from '../../lib/generate-binary-bytes'

export default {
  title: 'Christmas/ChristmasTree',
  component: ChristmasTree,
}

const Template = (args) => (
  <Frame name="ChristmasTree" seeded>
    <ChristmasTree {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  size: 20,
  printWidth: 180,
  printHeight: 240,
}
