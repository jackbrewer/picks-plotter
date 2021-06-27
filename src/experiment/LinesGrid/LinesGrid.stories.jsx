import React from 'react'

import LinesGrid from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/LinesGrid',
  component: LinesGrid,
}

const Template = (args) => (
  <Frame name="LinesGrid">
    <LinesGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}

export const Default2 = Template.bind({})
Default2.args = {
  printWidth: 200,
  printHeight: 300,
  width: 200,
  height: 300,
  rows: 480,
  cols: 320,
  lengthOffset: 0.2,
  xOffset: 0,
  yOffset: 0,
  angle: 180,
  scale: 1,
}
