import React from 'react'

import Triangles from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Triangles',
  component: Triangles,
}

const Template = (args) => (
  <Frame name="Triangles">
    <Triangles {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  triangles: true,
}

export const Complex = Template.bind({})
Complex.args = {
  ...Default.args,
  pointCount: 1000,
}

export const Nodes = Template.bind({})
Nodes.args = {
  nodes: true,
}
