import React from 'react'

import OffsetSpirals from './'

import Frame from '../../component/Frame'

export default {
  title: 'Example/OffsetSpirals',
  component: OffsetSpirals,
}

const Template = (args) => (
  <Frame name="OffsetSpirals">
    <OffsetSpirals {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  colors: ['lime', 'yellow', 'cyan', 'magenta'],
  containerSize: 180,
  maxRadius: 90,
  minRadius: 0.5,
  numPoints: 20,
  offset: 0.2,
  printSize: 180,
  rotations: 69,
  tension: 1,
}

export const Large = Template.bind({})
Large.args = {
  colors: ['yellow', 'cyan', 'magenta', 'black'],
  containerSize: 360,
  maxRadius: 180,
  minRadius: 0.5,
  numPoints: 33,
  offset: 0.2,
  printSize: 360,
  rotations: 140,
  tension: 1,
}

export const LargeOffset = Template.bind({})
LargeOffset.args = {
  colors: ['yellow', 'cyan', 'magenta', 'black'],
  containerSize: 360,
  maxRadius: 180,
  minRadius: 0.5,
  numPoints: 33,
  offset: 0.2,
  printSize: 360,
  rotations: 140,
  tension: 1,
  staggeredOffset: true,
}

export const Rainbow = Template.bind({})
Rainbow.args = {
  colors: [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    '',
    '',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    '',
    '',
  ],
  containerSize: 180,
  maxRadius: 90,
  minRadius: 10,
  numPoints: 20,
  offset: 0,
  printSize: 180,
  rotations: 5,
  tension: 1,
}
