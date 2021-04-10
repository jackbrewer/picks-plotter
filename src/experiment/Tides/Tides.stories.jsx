import React from 'react'

import Tides from './'
import Frame from '../../structure/Frame'

import bude2021 from './fixtures/bude-2021.json'

export default {
  title: 'Example/Tides',
  component: Tides,
}

const Template = (args) => (
  <Frame name="Tides">
    <Tides {...args} />
  </Frame>
)

const width = 1000
const height = width / 1.5
const printWidth = 200
const printHeight = (height / width) * printWidth

export const Default = Template.bind({})
Default.args = {
  data: bude2021,
  width,
  height,
  printWidth,
  printHeight,
  color1: 'navy',
  color2: 'skyblue',
}
