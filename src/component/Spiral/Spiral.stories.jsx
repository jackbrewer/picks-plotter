import React from 'react'

import Spiral from './'

import Frame from '../Frame'
import Svg from '../Svg'
import Safe from '../Safe'

export default {
  title: 'Shape/Spiral',
  component: Spiral,
}

const Template = (args) => (
  <Frame args={args} name="Spiral">
    <Svg width={500} height={500} viewBox="0 0 500 500">
      <Safe width={500} height={500} safe={10} />
      <Spiral {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
