import React from 'react'

import BrickAlpha from './'
import Svg from '../../component/Svg'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/BrickAlpha',
  component: BrickAlpha,
}

const Template = (args) => (
  <Frame name="BrickAlpha">
    <Svg width={300} height={300}>
      <BrickAlpha {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = { r: 150, cx: 150, cy: 150 }
