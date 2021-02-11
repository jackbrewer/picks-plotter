import React from 'react'

import Snowflake from './'
import Frame from '../../component/Frame'
// import Svg from '../../component/Svg'

export default {
  title: 'Example/Snowflake',
  component: Snowflake,
}

const Template = (args) => (
  <Frame>
    {/* <Svg width="100mm" height="100mm" viewBox="0 0 500 500"> */}
    <Snowflake {...args} />
    {/* </Svg> */}
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  height: 500,
  width: 500,
}
