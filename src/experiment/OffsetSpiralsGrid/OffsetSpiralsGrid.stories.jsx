import React from 'react'

import OffsetSpiralsGrid from './'

import Frame from '../../component/Frame'

export default {
  title: 'Example/OffsetSpiralsGrid',
  component: OffsetSpiralsGrid,
}

const Template = (args) => (
  <Frame name="OffsetSpiralsGrid">
    <OffsetSpiralsGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  containerWidth: 190,
  containerHeight: 300,
  maxRadius: 40,
  minRadius: 0.5,
  numPoints: 20,
  offset: 0.2,
  printWidth: 190,
  printHeight: 300,
  rotations: 69,
  tension: 1,
  gutter: 2,
}

export const Large = Template.bind({})
Large.args = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  containerWidth: 360,
  containerHeight: 360,
  maxRadius: 180,
  minRadius: 0.5,
  numPoints: 33,
  offset: 0.2,
  printWidth: 360,
  printHeight: 360,
  rotations: 140,
  tension: 1,
}
