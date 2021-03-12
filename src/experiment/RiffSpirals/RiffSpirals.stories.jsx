import React from 'react'

import RiffSpirals from './'

import Frame from '../../component/Frame'

import offsets from '../RiffCircle/fixtures/under-the-bridge.json'
import hysteria from '../RiffCircle/fixtures/hysteria/vocals.json'

export default {
  title: 'Example/RiffSpirals',
  component: RiffSpirals,
}

const Template = (args) => (
  <Frame name="RiffSpirals">
    <RiffSpirals {...args} />
  </Frame>
)

export const UnderTheBridge = Template.bind({})
UnderTheBridge.args = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  containerSize: 180,
  maxRadius: 90,
  minRadius: 0.5,
  numPoints: 100,
  offset: 0,
  printSize: 180,
  rotations: 72,
  tension: 1,
  offsets: offsets.left,
}

export const Hysteria = Template.bind({})
Hysteria.args = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  containerSize: 180,
  maxRadius: 90,
  minRadius: 0.5,
  numPoints: 50,
  offset: 0,
  printSize: 180,
  rotations: 60,
  tension: 1,
  offsets: hysteria.left,
}
