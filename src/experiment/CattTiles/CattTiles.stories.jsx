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
