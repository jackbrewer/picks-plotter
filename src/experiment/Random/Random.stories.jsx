import React from 'react'

import centralLimitRand from '../../lib/random-central-limit'
import randomBm from '../../lib/random-bm'

import One from './'

export default {
  title: 'Utility/Random',
  component: One,
  argTypes: { points: { control: null } },
}

const Template = (args) => <One {...args} />

export const Linear = Template.bind({})
Linear.args = { points: [...Array(200).keys()].map((i) => i) }

export const Uniform = Template.bind({})
Uniform.args = {
  points: [...Array(200).keys()].map(() => Math.random()).sort(),
}

export const CentralLimit = Template.bind({})
CentralLimit.args = {
  points: [...Array(200).keys()].map(() => centralLimitRand()).sort(),
}

export const BM = Template.bind({})
BM.args = {
  points: [...Array(200).keys()].map(() => randomBm(0, 1, 1)).sort(),
}
