import React from 'react'

import CMYKStitches from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/CMYKStitches',
  component: CMYKStitches,
}

const Template = (args) => (
  <Frame name="CMYKStitches">
    <CMYKStitches {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 140,
  height: 140,
  printWidth: 140,
  printHeight: 140,
  cols: 20,
  rows: 20,
  padding: 20,
  scale: 0.5,
}
