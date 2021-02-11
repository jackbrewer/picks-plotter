import React from 'react'

import CircleContainer from './'

export default {
  title: 'Example/CircleContainer',
  component: CircleContainer,
}

const Template = (args) => <CircleContainer {...args} />

export const Default = Template.bind({})
Default.args = { thickness: 30 }
Default.argTypes = {
  thickness: { control: { type: 'range', min: 1, max: 200 } },
}
