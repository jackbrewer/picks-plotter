import React from 'react'

import Blocks2 from './'
import Svg from '../../component/Svg'
import Frame from '../../component/Frame'

export default {
  title: 'Example/Blocks2',
  component: Blocks2,
}

const Template = (args) => (
  <Frame>
    <Svg width={900} height={900}>
      <Blocks2 {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
