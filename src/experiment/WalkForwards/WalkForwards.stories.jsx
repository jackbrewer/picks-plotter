import React from 'react'

import WalkForwards from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Walker/WalkForwards',
  component: WalkForwards,
}

const Template = (args) => (
  <Frame name="WalkForwards">
    <WalkForwards {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 1500,
  height: 1500,
}
