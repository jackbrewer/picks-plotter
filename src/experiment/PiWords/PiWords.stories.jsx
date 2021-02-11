import React from 'react'

import PiWords from './'
import Frame from '../../component/Frame'

export default {
  title: 'Example/PiWords',
  component: PiWords,
}

const Template = (args) => (
  <Frame>
    <PiWords {...args} />
  </Frame>
)

const width = 10000
const height = width / 1.5
const printWidth = 300
const printHeight = (height / width) * printWidth

export const Default = Template.bind({})
Default.args = {
  width,
  height,
  printWidth,
  printHeight,
}
