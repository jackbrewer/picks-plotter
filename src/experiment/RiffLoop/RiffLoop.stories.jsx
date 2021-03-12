import React from 'react'

import RiffLoop from './'
import Frame from '../../component/Frame'

import brightlyWound from './fixtures/brightly-wound.json'
import fossil from './fixtures/fossil.json'
import whiteWalls from './fixtures/white-walls.json'
import smokeWater from './fixtures/smoke-on-the-water.json'
import underBridge from './fixtures/under-the-bridge.json'
import wholeLotta from './fixtures/whole-lotta-love.json'
import driveData from './fixtures/drive.json'

export default {
  title: 'Example/RiffLoop',
  component: RiffLoop,
}

const Template = (args) => (
  <Frame name="RiffLoop">
    <RiffLoop {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = { audio: '/audio/fossil-loop.mp3', data: fossil }

export const WhiteWalls = Template.bind({})
WhiteWalls.args = { audio: '/audio/white-walls-clipped.mp3', data: whiteWalls }

export const BrightlyWound = Template.bind({})
BrightlyWound.args = {
  audio: '/audio/brightly-wound-loop.mp3',
  data: brightlyWound,
  color1: 'red',
  color2: 'blue',
}

export const Drive = Template.bind({})
Drive.args = {
  audio: '/audio/drive.ogg',
  data: driveData,
  // color1: 'lime',
  // color2: 'brown',
}

export const SmokeOnTheWater = Template.bind({})
SmokeOnTheWater.args = {
  audio: '/audio/smoke-on-the-water.mp3',
  data: smokeWater,
  color1: 'navy',
  color2: 'violet',
  balanceL: 1,
  balanceR: 0.5,
}

export const underTheBridge = Template.bind({})
underTheBridge.args = {
  audio: '/audio/under-the-bridge.mp3',
  data: underBridge,
  color1: 'red',
  color2: 'yellow',
}

export const wholeLottaLove = Template.bind({})
wholeLottaLove.args = {
  audio: '/audio/whole-lotta-love.mp3',
  data: wholeLotta,
  color1: 'red',
  color2: 'grey',
}
