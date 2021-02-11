import React from 'react'

import Packer from './'
import Frame from '../../component/Frame'

export default {
  title: 'Example/Packer',
  component: Packer,
}

const Template = (args) => (
  <Frame>
    <Packer {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}

export const Hatch = Template.bind({})
Hatch.args = {
  hatch: true,
}
