import React from 'react'

import WalkTest from './'
import Frame from '../../component/Frame'

export default {
  title: 'Walker/WalkTest',
  component: WalkTest,
}

const Template = (args) => (
  <Frame>
    <WalkTest {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 1500,
  height: 1500,
}
