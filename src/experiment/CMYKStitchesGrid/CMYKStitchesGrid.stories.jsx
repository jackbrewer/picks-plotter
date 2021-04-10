import React from 'react'

import CMYKStitchesGrid from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/CMYKStitchesGrid',
  component: CMYKStitchesGrid,
}

const Template = (args) => (
  <Frame name="CMYKStitchesGrid">
    <CMYKStitchesGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 140,
  height: 140,
  printWidth: 140,
  printHeight: 140,
  cols: 30,
  rows: 30,
  padding: 20,
  scale: 1,
  xOff: 0.5,
  yOff: 0.5,
}

export const One = Template.bind({})
One.args = {
  width: 180,
  height: 180,
  printWidth: 180,
  printHeight: 180,
  cols: 17,
  rows: 57,
  padding: 27,
  scale: 1,
  xOff: 0.85,
  yOff: 0.85,
}
