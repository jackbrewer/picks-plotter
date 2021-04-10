import React from 'react'

import ThermoHygrometer from './'
import Frame from '../../structure/Frame'

import data01 from './fixtures/01.json'
import data02 from './fixtures/02.json'

export default {
  title: 'Example/ThermoHygrometer',
  component: ThermoHygrometer,
}

const Template = (args) => (
  <Frame name="ThermoHygrometer">
    <ThermoHygrometer {...args} />
  </Frame>
)

const width = 1000
const height = width / 1.5
const printWidth = 200
const printHeight = (height / width) * printWidth

export const Default = Template.bind({})
Default.args = {
  data: data01,
  width,
  height,
  printWidth,
  printHeight,
  color1: 'navy',
  color2: 'skyblue',
}

export const Detailed = Template.bind({})
Detailed.args = {
  data: data02,
  width,
  height,
  printWidth,
  printHeight,
  color1: 'navy',
  color2: 'skyblue',
}
