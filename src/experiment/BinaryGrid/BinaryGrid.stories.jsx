import React from 'react'

import BinaryGrid from './'
import Frame from '../../component/Frame'

import LineStar from './component/LineStar'
import NestedCircle from './component/NestedCircle'
import SquareGridEl from './component/SquareGrid'
import CircleCircleEl from './component/CircleCircle'

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
  childFunc: ({
    width,
    height,
    i,
    col,
    row,
    totalCount,
    byte,
    highlight,
  }) => {},
}

export const EightBits = Template.bind({})
EightBits.args = {
  ...Default.args,
  cols: 16,
  rows: 16,
  childFunc: (props) => <LineStar {...props} />,
  highlights: [0, 16 * 16 - 1],
}

export const NestedCircles = Template.bind({})
NestedCircles.args = {
  ...Default.args,
  cols: 16,
  rows: 16,
  childFunc: (props) => <NestedCircle {...props} />,
}

export const SquareGrid = Template.bind({})
SquareGrid.args = {
  ...Default.args,
  cols: 16,
  rows: 16,
  childFunc: (props) => <SquareGridEl {...props} />,
  highlights: [0, 16 * 16 - 1],
}

export const CircleCircle = Template.bind({})
CircleCircle.args = {
  ...Default.args,
  cols: 16,
  rows: 16,
  childFunc: (props) => <CircleCircleEl {...props} />,
  highlights: [16 * 16 - 1],
}
