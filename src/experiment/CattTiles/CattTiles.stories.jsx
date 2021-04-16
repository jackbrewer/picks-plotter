import React from 'react'

import CattTiles from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/CattTiles',
  component: CattTiles,
}

const Template = (args) => (
  <Frame name="CattTiles" seeded refresh>
    <CattTiles {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 400,
  height: 400,
  cols: 10,
  rows: 10,
  lines: 5,
}

export const Large = Template.bind({})
Large.args = {
  printWidth: 210,
  printHeight: 290,
  width: 210,
  height: 290,
  cols: 21,
  rows: 29,
  lines: 7,
}
