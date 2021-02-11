import React from 'react'

import DayLength from './'
import Frame from '../../component/Frame'

// https://www.sunrise-and-sunset.com/en/sun/united-kingdom/lydney/2021
// http://data.ceda.ac.uk/badc/ukmo-midas-open/data/uk-daily-temperature-obs/dataset-version-202007/gloucestershire/10268_winchcombe-sudeley-castle/qc-version-1

import data2021 from './fixtures/2021.json'

export default {
  title: 'Example/DayLength',
  component: DayLength,
}

const Template = (args) => (
  <Frame>
    <DayLength {...args} />
  </Frame>
)

export const Default = Template.bind({})
const width = data2021.length
const height = width / 1.5
const printWidth = 200
const printHeight = (height / width) * printWidth
Default.args = {
  data: data2021,
  width,
  height,
  printWidth,
  printHeight,
  color1: 'navy',
  color2: 'skyblue',
}
