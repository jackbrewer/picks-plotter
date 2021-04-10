import React from 'react'

import Lines2 from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Lines2',
  component: Lines2,
}

const Template = (args) => (
  <Frame name="Lines2">
    <Lines2 {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = { cols: 11, rows: 6 }

export const Two = Template.bind({})
Two.args = {
  cols: 141,
  rows: 50,
  wobble: 0.04,
  width: 800,
  height: 400,
  safe: 20,
}
