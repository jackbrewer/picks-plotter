import React from 'react'

import Brick from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Brick',
  component: Brick,
}

const Template = (args) => (
  <Frame name="Brick">
    <Brick {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = { r: 150, cx: 150, cy: 150 }
