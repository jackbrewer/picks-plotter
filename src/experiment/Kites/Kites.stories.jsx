import React from 'react'

import Kites from '../Kites/'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Kites',
  component: Kites,
}

const Template = (args) => (
  <Frame name="Kites" seeded refresh>
    <Kites {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
