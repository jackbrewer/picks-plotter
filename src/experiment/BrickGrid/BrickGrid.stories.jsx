import React from 'react'

import BrickGrid from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/BrickGrid',
  component: BrickGrid,
}

const Template = (args) => (
  <Frame name="BrickGrid" seeded refresh>
    <BrickGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
