import React from 'react'

import BlobFace from './'
import Frame from '../../component/Frame'

export default {
  title: 'Example/BlobFace',
  component: BlobFace,
}

const Template = (args) => (
  <Frame>
    <BlobFace {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
