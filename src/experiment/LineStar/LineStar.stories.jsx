import React from 'react'

import LineStar from './'
import Frame from '../../component/Frame'

export default {
  title: 'Example/LineStar',
  component: LineStar,
}

const Template = (args) => (
  <Frame args={args} seeded name="LineStar">
    <LineStar {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  count: 100,
  width: 140,
  height: 140,
  printWidth: 140,
  printHeight: 140,
  minRadius: 20,
  maxRadius: 70,
  x1Offset: 0,
  x2Offset: 0,
  randomMultiplier: 0.3,
}
