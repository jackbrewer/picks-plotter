import React from 'react'

import WalkFillCrop from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Walker/WalkFillCrop',
  component: WalkFillCrop,
}

const Template = (args) => (
  <Frame name="WalkFillCrop">
    <WalkFillCrop {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 180,
  height: 180,
  cols: 100,
  rows: 100,
  printWidth: 180,
  printHeight: 180,
}

export const Shadow = Template.bind({})
Shadow.args = {
  width: 180,
  height: 180,
  cols: 100,
  rows: 100,
  printWidth: 180,
  printHeight: 180,
  shadow: true,
}
