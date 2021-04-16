import React from 'react'

import TileStraight from './TileStraight'
import Frame from '../../../structure/Frame'
import Svg from '../../../component/Svg'

export default {
  title: 'Example/CattTiles/TileStraight',
  component: TileStraight,
}

const Template = (args) => (
  <Frame name="TileStraight">
    <Svg width={100} height={100}>
      <TileStraight {...args} />
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
