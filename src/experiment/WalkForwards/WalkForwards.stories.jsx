import React from 'react'

import WalkForwards from './'
import Frame from '../../component/Frame'

export default {
  title: 'Walker/WalkForwards',
  component: WalkForwards,
}

const Template = (args) => (
  <Frame args={args} name="WalkForwards">
    <WalkForwards {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 1500,
  height: 1500,
}
