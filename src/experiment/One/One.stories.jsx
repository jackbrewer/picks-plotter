import React from 'react'

import One from './'

export default {
  title: 'Example/One',
  component: One,
}

const Template = (args) => <One {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}
