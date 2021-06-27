import React from 'react'

import QuickDraw from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/QuickDraw',
  component: QuickDraw,
}

const Template = (args) => (
  <Frame name="QuickDraw" seeded refresh>
    <QuickDraw {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
