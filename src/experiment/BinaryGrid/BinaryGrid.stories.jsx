import React from 'react'

import BinaryGrid from './'
import Frame from '../../component/Frame'

import LineStar from './component/LineStar'
import NestedCircle from './component/NestedCircle'

export default {
  title: 'Example/BinaryGrid',
  component: BinaryGrid,
}

const Template = (args) => (
  <Frame>
    <BinaryGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 400,
  height: 400,
  cols: 19,
  rows: 19,
  childFunc: ({ width, height, i, col, row, totalCount, byte }) => {},
}

export const EightBits = Template.bind({})
EightBits.args = {
  ...Default.args,
  cols: 16,
  rows: 16,
  childFunc: (props) => <LineStar {...props} />,
}

export const NestedCircles = Template.bind({})
NestedCircles.args = {
  ...Default.args,
  cols: 16,
  rows: 16,
  childFunc: (props) => <NestedCircle {...props} />,
}
