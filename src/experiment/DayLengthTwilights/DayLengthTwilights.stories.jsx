import React from 'react'

import DayLengthTwilights from './'
import Frame from '../../component/Frame'

import dataQ1 from './fixtures/2021/q1.json'

export default {
  title: 'Example/DayLengthTwilights',
  component: DayLengthTwilights,
}

const Template = (args) => (
  <Frame args={args} name="DayLengthTwilights">
    <DayLengthTwilights {...args} />
  </Frame>
)

export const Default = Template.bind({})
const width = dataQ1.length
const height = width / 1.5
const printWidth = 200
const printHeight = (height / width) * printWidth
Default.args = {
  data: dataQ1,
  width,
  height,
  printWidth,
  printHeight,
  color1: 'navy',
  color2: 'skyblue',
}
