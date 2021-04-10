import React from 'react'

import Card from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Template/Card',
  component: Card,
}

const Template = (args) => (
  <Frame name="Card">
    <Card {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
