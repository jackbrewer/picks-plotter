import React from 'react'

import Lines from './'

export default {
  title: 'Example/Lines',
  component: Lines,
}

const Template = (args) => <Lines {...args} />

export const Default = Template.bind({})
Default.args = { cols: 101, rows: 101 }

export const Two = Template.bind({})
Two.args = {
  cols: 141,
  rows: 50,
  wobble: 0.04,
  width: 800,
  height: 400,
  safe: 20,
}
