import React from 'react'

import BlobFace from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/BlobFace',
  component: BlobFace,
}

const Template = (args) => (
  <Frame name="BlobFace" refresh>
    <BlobFace {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
