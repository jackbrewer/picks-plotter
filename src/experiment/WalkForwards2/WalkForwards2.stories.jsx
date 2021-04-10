import React from 'react'

import WalkForwards2 from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Walker/WalkForwards2',
  component: WalkForwards2,
}

const Template = (args) => (
  <Frame name="WalkForwards2">
    <WalkForwards2 {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 1800,
  height: 1800,
}
