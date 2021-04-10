import React from 'react'

import Brick from './'
import Svg from '../../component/Svg'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Brick',
  component: Brick,
}

const Template = (args) => (
  <Frame name="Brick">
    <Svg width={300} height={300}>
      <Brick {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = { r: 150, cx: 150, cy: 150 }
