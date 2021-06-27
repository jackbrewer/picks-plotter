import React from 'react'

import PickGrid from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/PickGrid',
  component: PickGrid,
}

const Template = (args) => (
  <Frame name="PickGrid" seeded refresh>
    <PickGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
