import React from 'react'

import WalkFillSpiral from './'

import Frame from '../../component/Frame'
import Svg from '../../component/Svg'

export default {
  title: 'Walker/WalkFillSpiral',
  component: WalkFillSpiral,
}

const Template = (args) => (
  <Frame>
    <Svg width="160mm" height="160mm" viewBox="0 0 160 160">
      <WalkFillSpiral {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
