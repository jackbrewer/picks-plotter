import React from 'react'

import PerlinLines from './'

import Frame from '../../component/Frame'

export default {
  title: 'Example/PerlinLines',
  component: PerlinLines,
}

const Template = (args) => (
  <Frame name="PerlinLines">
    <PerlinLines {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  cols: 141,
  rows: 141,
  width: 180,
  height: 180,
  printWidth: 180,
  printHeight: 180,
  safe: 0,
}
