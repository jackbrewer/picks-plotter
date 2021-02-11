import React from 'react'

import LineStar from './'

export default {
  title: 'Example/LineStar',
  component: LineStar,
}

const Template = (args) => <LineStar {...args} />

export const Default = Template.bind({})
Default.args = { count: 120 }
