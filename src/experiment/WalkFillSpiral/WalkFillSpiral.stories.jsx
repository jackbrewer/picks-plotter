import React from 'react'

import WalkFillSpiral from './'

import Frame from '../../structure/Frame'
import Svg from '../../component/Svg'

export default {
  title: 'Walker/WalkFillSpiral',
  component: WalkFillSpiral,
}

const Template = (args) => (
  <Frame name="WalkFillSpiral">
    <Svg width="160mm" height="160mm" viewBox="0 0 160 160">
      <WalkFillSpiral {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
