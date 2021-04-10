import React from 'react'

import TruchetTiles from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/TruchetTiles',
  component: TruchetTiles,
}

const Template = (args) => (
  <Frame name="TruchetTiles" seeded>
    <TruchetTiles {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  // debug: true,
  width: 140,
  height: 140,
  printWidth: 140,
  printHeight: 140,
  cols: 10,
  rows: 10,
}
