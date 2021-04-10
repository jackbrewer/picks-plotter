import React from 'react'

import Frame from '../../structure/Frame'
import GiftTag from './'

export default {
  title: 'Template/GiftTag',
  component: GiftTag,
}

const Template = (args) => (
  <Frame name="GiftTag">
    <GiftTag {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
