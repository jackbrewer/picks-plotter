import React from 'react'

import RiffLoopMultiChannel from './'
import Frame from '../../structure/Frame'

import song2Drums from './fixtures/song2/drums.json'
import song2Vocals from './fixtures/song2/vocals.json'
import song2Bass from './fixtures/song2/bass.json'
import song2Guitar from './fixtures/song2/guitar.json'

import letsDanceDrums from './fixtures/lets-dance/drums.json'
import letsDanceBacking from './fixtures/lets-dance/backing.json'
import letsDanceBass from './fixtures/lets-dance/bass.json'
import letsDanceGuitar from './fixtures/lets-dance/guitar.json'

import UprisingAdditional from './fixtures/uprising/additional.json'
import UprisingBass from './fixtures/uprising/bass.json'
import UprisingDrums from './fixtures/uprising/drums.json'
import UprisingGuitar from './fixtures/uprising/guitar.json'
import UprisingVocals from './fixtures/uprising/vocals.json'

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
  innerPadding: 0.1,
}

export const Uprising = Template.bind({})
Uprising.args = {
  audio: '/audio/uprising/uprising.mp3',
  data: [
    // UprisingBass,
    // UprisingDrums,
    // UprisingGuitar,
    UprisingVocals,
    // UprisingAdditional,
  ],
  colors: [
    // 'teal', 'cyan', 'green',
    'black',
  ],
  multipliers: [0.8, 4, 0.9, 0.8],
  innerPadding: 0.14,
  innerRadiusMultiplier: 0.3,
  lyricRadiusMultiplier: 1.14,
  lyricsColor: 'white',
  lyricsSize: 15,
  lyrics:
    // 'They   will  not  force     us,   They will stop de-  grading  us,   They will not  con-  trol   us,    We  will  be   vic-    torious',
    ' THEY WILL NOT FORCE US,  THEY WILL STOP DEGRADING US, THEY WILL NOT CONTROL US,  WE WILL BE VICTORIOUS,      ',
}
