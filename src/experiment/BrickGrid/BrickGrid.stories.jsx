import React from 'react'

import BrickGrid from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/BrickGrid',
  component: BrickGrid,
}

const Template = (args) => (
  <Frame name="BrickGrid" seeded refresh>
    <BrickGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  printWidth: 218,
  printHeight: 300,
}

export const Large = Template.bind({})
Large.args = {
  ...Default.args,
  cols: 6,
  rows: 8,
  all: true,
  shuffle: false,
}
