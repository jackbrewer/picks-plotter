import React from 'react'

import Packer from './'
import Frame from '../../component/Frame'

export default {
  title: 'Example/Packer',
  component: Packer,
}

const Template = (args) =>
  console.log(args) || (
    <Frame name="Packer">
      <Packer {...args} />
    </Frame>
  )

export const Default = Template.bind({})
Default.args = {}

export const Hatch = Template.bind({})
Hatch.args = {
  hatch: true,
}
