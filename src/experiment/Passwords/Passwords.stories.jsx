import React from 'react'

import Passwords from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Passwords',
  component: Passwords,
}

const Template = (args) => (
  <Frame name="Passwords" seeded refresh>
    <Passwords {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  printWidth: 218,
  printHeight: 300,
  width: 218,
  height: 300,
}
