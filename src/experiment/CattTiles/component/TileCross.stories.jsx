import React from 'react'

import TileCross from './TileCross'
import Frame from '../../../structure/Frame'
import Svg from '../../../component/Svg'

export default {
  title: 'Example/CattTiles/TileCross',
  component: TileCross,
}

const Template = (args) => (
  <Frame name="TileCross">
    <Svg width={100} height={100}>
      <TileCross {...args} />
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
  lines: 6,
}

export const Offset = Template.bind({})
Offset.args = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  rot: 0,
  lines: 6,
  offset: true,
}

export const OffsetJoin = Template.bind({})
OffsetJoin.args = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  rot: 0,
  lines: 6,
  offset: true,
  offsetJoin: true,
}
