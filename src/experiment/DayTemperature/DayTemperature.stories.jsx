import React from 'react'

import DayTemperature from './'
import Frame from '../../component/Frame'

// http://data.ceda.ac.uk/badc/ukmo-midas-open/data/uk-daily-temperature-obs/dataset-version-202007/gloucestershire/00691_westonbirt/qc-version-1

import data2019 from './fixtures/2019.json'

export default {
  title: 'Example/DayTemperature',
  component: DayTemperature,
}

const Template = (args) => (
  <Frame args={args} name="DayTemperature">
    <DayTemperature {...args} />
  </Frame>
)

export const Default = Template.bind({})
const width = data2019.length
const height = width / 1.5
const printWidth = 200
const printHeight = (height / width) * printWidth
Default.args = {
  data: data2019,
  width,
  height,
  printWidth,
  printHeight,
  color1: 'navy',
  color2: 'skyblue',
}
