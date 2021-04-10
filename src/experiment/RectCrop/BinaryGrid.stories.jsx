import React from 'react'

import RectCrop from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/RectCrop',
  component: RectCrop,
}

const Template = (args) => (
  <Frame name="RectCrop">
    <RectCrop {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.argTypes = {
  top: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
  right: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
  bottom: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
  left: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
}
Default.args = {
  printWidth: 160,
  printHeight: 160,
  width: 160,
  height: 160,
}
