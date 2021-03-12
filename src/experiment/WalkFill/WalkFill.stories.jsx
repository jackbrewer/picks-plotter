import React from 'react'

import WalkFill from './'
import Frame from '../../component/Frame'

export default {
  title: 'Walker/WalkFill',
  component: WalkFill,
}

const Template = (args) => (
  <Frame name="WalkFill">
    <WalkFill {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 180,
  height: 180,
  cols: 20,
  rows: 20,
  printWidth: 180,
  printHeight: 180,
}

export const Colours = Template.bind({})
Colours.args = {
  width: 180,
  height: 180,
  cols: 20,
  rows: 20,
  printWidth: 180,
  printHeight: 180,
  colours: [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'magenta',
    'violet',
  ],
}
