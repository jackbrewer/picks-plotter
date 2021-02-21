import React from 'react'

import WalkFill from './'
import Frame from '../../component/Frame'

export default {
  title: 'Walker/WalkFill',
  component: WalkFill,
}

const Template = (args) => (
  <Frame>
    <WalkFill {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 180,
  height: 180,
}
