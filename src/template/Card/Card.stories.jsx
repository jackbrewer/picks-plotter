import React from 'react'

import Card from './'
import Frame from '../../component/Frame'

export default {
  title: 'Template/Card',
  component: Card,
}

const Template = (args) => (
  <Frame>
    <Card {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
