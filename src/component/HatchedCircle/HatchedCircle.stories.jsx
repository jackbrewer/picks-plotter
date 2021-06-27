import React from 'react'
import Frame from '../../structure/Frame'
import Svg from '../Svg'

import HatchedCircle from './'

export default {
  title: 'Primitive/HatchedCircle',
  component: HatchedCircle,
  argTypes: {
    cx: { control: { type: 'range', min: 1, max: 300 } },
    cy: { control: { type: 'range', min: 1, max: 300 } },
    r: { control: { type: 'range', min: 1, max: 300 } },
    r2: { control: { type: 'range', min: 1, max: 300 } },
  },
}

const Template = (args) => (
  <Frame>
    <Svg width={300} height={300}>
      <HatchedCircle {...args} />
    </Svg>
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  cx: 150,
  cy: 150,
  r: 150,
  r2: 150,
  layers: [
    {
      density: 10,
      color: '#000',
    },
  ],
}

export const Layers = Template.bind({})
Layers.args = {
  cx: 150,
  cy: 150,
  r: 150,
  r2: 150,
  layers: [
    {
      density: 10,
      color: 'yellow',
    },
    {
      density: 10,
      color: 'magenta',
    },
    {
      density: 10,
      color: 'cyan',
    },
  ],
}

export const LineTweaks = Template.bind({})
LineTweaks.args = {
  cx: 150,
  cy: 150,
  r: 150,
  r2: 150,
  layers: [
    {
      density: 20,
      color: '#000',
    },
  ],
  lineMinOffset: 0.5,
  lineMaxOffset: 1.5,
  lineSkipChance: 0.25,
}
