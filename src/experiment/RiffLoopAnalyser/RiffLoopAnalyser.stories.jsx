import React from 'react'

import RiffLoopAnalyser from './'
import Frame from '../../component/Frame'

export default {
  title: 'Example/RiffLoopAnalyser',
  component: RiffLoopAnalyser,
}

const Template = (args) => (
  <Frame name="RiffLoopAnalyser">
    <RiffLoopAnalyser {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = { audio: '/audio/fossil-loop.mp3' }

export const WhiteWalls = Template.bind({})
WhiteWalls.args = { audio: '/audio/white-walls-clipped.mp3' }

export const BrightlyWound = Template.bind({})
BrightlyWound.args = { audio: '/audio/brightly-wound-loop.mp3' }

export const SmokeOnTheWater = Template.bind({})
SmokeOnTheWater.args = { audio: '/audio/smoke-on-the-water.mp3' }

export const SweetChild = Template.bind({})
SweetChild.args = { audio: '/audio/sweet-child-o-mine.mp3' }

export const UnderTheBridge = Template.bind({})
UnderTheBridge.args = { audio: '/audio/under-the-bridge.mp3' }

export const WholeLottaLove = Template.bind({})
WholeLottaLove.args = { audio: '/audio/whole-lotta-love.mp3' }

export const Metallica = Template.bind({})
Metallica.args = { audio: '/audio/metallica/01.mp3' }

export const MuseHysteria = Template.bind({})
MuseHysteria.args = { audio: '/audio/hysteria/bass.ogg' }
