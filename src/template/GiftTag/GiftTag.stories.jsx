import React from 'react'

import Frame from '../../component/Frame'
import GiftTag from './'

export default {
  title: 'Template/GiftTag',
  component: GiftTag,
}

const Template = (args) => (
  <Frame args={args} name="GiftTag">
    <GiftTag {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
