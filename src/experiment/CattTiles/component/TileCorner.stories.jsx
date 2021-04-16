import React from 'react'

import TileCorner from './TileCorner'
import Frame from '../../../structure/Frame'
import Svg from '../../../component/Svg'

export default {
  title: 'Example/CattTiles/TileCorner',
  component: TileCorner,
}

const Template = (args) => (
  <Frame name="TileCorner">
    <Svg width={100} height={100}>
      <TileCorner {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  rot: 0,
  lines: 5,
}

export const Offset = Template.bind({})
Offset.args = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  rot: 0,
  lines: 5,
  offset: true,
}

export const OffsetJoin = Template.bind({})
OffsetJoin.args = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  rot: 0,
  lines: 5,
  offset: true,
  offsetJoin: true,
}
