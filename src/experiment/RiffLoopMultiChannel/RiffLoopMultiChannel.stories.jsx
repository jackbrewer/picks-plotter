import React from 'react'

import RiffLoopMultiChannel from './'
import Frame from '../../component/Frame'

import song2Drums from './fixtures/song2/drums.json'
import song2Vocals from './fixtures/song2/vocals.json'
import song2Bass from './fixtures/song2/bass.json'
import song2Guitar from './fixtures/song2/guitar.json'

import letsDanceDrums from './fixtures/lets-dance/drums.json'
import letsDanceBacking from './fixtures/lets-dance/backing.json'
import letsDanceBass from './fixtures/lets-dance/bass.json'
import letsDanceGuitar from './fixtures/lets-dance/guitar.json'

export default {
  title: 'Example/RiffLoopMultiChannel',
  component: RiffLoopMultiChannel,
  argTypes: {
    data: { control: { type: null } },
  },
}

const Template = (args) => (
  <Frame name="RiffLoopMultiChannel">
    <RiffLoopMultiChannel {...args} />
  </Frame>
)

export const Song2 = Template.bind({})
Song2.args = {
  audio: '/audio/song2/drums.mp3',
  data: [song2Drums, song2Bass, song2Guitar, song2Vocals],
  colors: ['cyan', 'yellow', 'magenta', 'black'],
}

export const LetsDance = Template.bind({})
LetsDance.args = {
  audio: '/audio/lets-dance/LetsDance.mp3',
  data: [letsDanceBacking, letsDanceDrums, letsDanceBass, letsDanceGuitar],
  colors: ['yellow', 'magenta', 'cyan', 'black'],
}
