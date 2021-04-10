import React from 'react'

import RiffCircle from './'
import Frame from '../../structure/Frame'

import fossil from './fixtures/fossil.json'
import whiteWalls from './fixtures/white-walls.json'
import smokeWater from './fixtures/smoke-on-the-water.json'
import underBridge from './fixtures/under-the-bridge.json'
import wholeLotta from './fixtures/whole-lotta-love.json'

import metallica1 from './fixtures/metallica/01'
import metallica2 from './fixtures/metallica/02'
import metallica3 from './fixtures/metallica/03'
import metallica4 from './fixtures/metallica/04'
import metallica5 from './fixtures/metallica/05'
import metallica6 from './fixtures/metallica/06'
import metallica7 from './fixtures/metallica/07'
import metallica8 from './fixtures/metallica/08'
import metallica9 from './fixtures/metallica/09'
import metallica10 from './fixtures/metallica/10'
import metallica11 from './fixtures/metallica/11'
import metallica12 from './fixtures/metallica/12'

import hysteriaVocals from './fixtures/hysteria/vocals'
import hysteriaGuitar from './fixtures/hysteria/guitar'
import hysteriaBass from './fixtures/hysteria/bass'
import hysteriaDrums from './fixtures/hysteria/drums'

export default {
  title: 'Example/RiffCircle',
  component: RiffCircle,
}

const Template = (args) => (
  <Frame name="RiffCircle" blacklistProps={['dataSets']}>
    <RiffCircle {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  dataSets: [fossil, whiteWalls, smokeWater, underBridge, wholeLotta],
  color1: 'gray',
  color2: 'red',
}

export const Metallica = Template.bind({})
Metallica.args = {
  dataSets: [
    metallica1,
    metallica2,
    metallica3,
    metallica4,
    metallica5,
    metallica6,
    metallica7,
    metallica8,
    metallica9,
    metallica10,
    metallica11,
    metallica12,
  ],
  color1: 'gray',
  color2: 'red',
}

export const MuseHysteria = Template.bind({})
MuseHysteria.args = {
  dataSets: [hysteriaVocals, hysteriaGuitar, hysteriaBass, hysteriaDrums],
  color1: 'gray',
  color2: 'red',
  rotation: -5,
}
