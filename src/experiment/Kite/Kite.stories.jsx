import React from 'react'

import Kite from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Kite',
  component: Kite,
}

const Template = (args) => (
  <Frame name="Kite" seeded refresh>
    <Kite {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
