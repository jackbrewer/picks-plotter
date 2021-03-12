import React from 'react'

import Blocks from './'
import Svg from '../../component/Svg'
import Frame from '../../component/Frame'

export default {
  title: 'Example/Blocks',
  component: Blocks,
}

const Template = (args) => (
  <Frame name="Blocks">
    <Svg width={900} height={900}>
      <Blocks {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
