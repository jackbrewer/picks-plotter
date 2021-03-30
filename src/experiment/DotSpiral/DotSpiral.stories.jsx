import React from 'react'

import DotSpiral from './'
import Frame from '../../component/Frame'

export default {
  title: 'Example/DotSpiral',
  component: DotSpiral,
}

const Template = (args) => (
  <Frame name="DotSpiral" seeded>
    <DotSpiral {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  // width,
  // height,
  // printWidth,
  // printHeight,
  // cols: 20 * 2,
  // rows: 15 * 2,
}

export const RandomLooking = Template.bind({})
RandomLooking.args = {
  width: 180,
  height: 180,
  printWidth: 180,
  printHeight: 180,
  numPoints: 40,
  pointRadius: 1.3,
  angleDiff: 33,
  distance: 1.3,
  seed: '',
}
