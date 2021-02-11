import React from 'react'

import Blob from './'

import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Blob',
  component: Blob,
}

const Template = (args) => (
  <Svg width={300} height={300} viewBox="0 0 300 300">
    <Safe width={300} height={300} safe={10} />
    <Blob {...args} />
  </Svg>
)

export const Default = Template.bind({})
Default.args = { sizeMin: 270, sizeMax: 300 }
