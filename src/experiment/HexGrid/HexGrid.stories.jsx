import React from 'react'

import sampleSeeded from '../../lib/sample-seeded'
import mapRange from '../../lib/map-range'

import HexGrid from './'
import Frame from '../../component/Frame'

import Hexagon from '../../component/Hexagon'
import IsometricCube from '../../component/IsometricCube'
import generateBinaryBytes from '../../lib/generate-binary-bytes'

export default {
  title: 'Example/HexGrid',
  component: HexGrid,
}

const Template = (args) => (
  <Frame name="HexGrid" seeded>
    <HexGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  size: 20,
  cols: 20,
  rows: 20,
  printWidth: 180,
  printHeight: 180,
}

export const Hexagons = Template.bind({})
Hexagons.args = {
  ...Default.args,
  childFunc: ({ width, height, i, totalCount }) => (
    <Hexagon cx={width / 2} cy={height / 2} r={(height / 2) * 0.8} />
  ),
}

export const Cubes = Template.bind({})
Cubes.args = {
  ...Default.args,
  cols: 14,
  rows: 14,
  childFunc: ({ width, height, i, totalCount }) => {
    return (
      <IsometricCube
        height={height * 0.8}
        hatchTop={3}
        hatchTop2={3}
        hatchLeft={5}
        hatchLeft2={5}
        hatchRight={7}
        hatchRight2={7}
      />
    )
  },
}

export const ShrinkingCubes = Template.bind({})
ShrinkingCubes.args = {
  ...Default.args,
  cols: 14,
  rows: 14,
  childFunc: ({ width, height, i, totalCount }) => {
    const scale = mapRange({
      value: 1 - (1 / totalCount) * i,
      min1: 0,
      max1: 1,
      min2: 0.8,
      max2: 0.5,
    })
    return (
      <IsometricCube
        height={height * scale}
        // hatchTop={3}
        hatchTop2={Math.floor(5 * scale)}
        // hatchLeft={5}
        hatchLeft2={Math.floor(7 * scale)}
        hatchRight={Math.floor(9 * scale)}
        // hatchRight2={7}
      />
    )
  },
}

const binaryCount = 64
const bytes = generateBinaryBytes({
  bits: 6,
  count: binaryCount,
  sort: true,
  shuffle: true,
})
export const Binary = Template.bind({})
Binary.args = {
  ...Default.args,
  cols: 8,
  rows: 8,
  childFunc: ({ width, height, i, totalCount }) => {
    if (i >= binaryCount) return null
    const byte = bytes[i]
    // const colors = ['yellow', 'cyan', 'magenta']
    return (
      <IsometricCube
        height={height * 0.8}
        hatchTopColor="yellow"
        hatchTop={byte[5] ? 4 : 0}
        hatchTop2={byte[2] ? 4 : 0}
        hatchLeftColor="cyan"
        hatchLeft={byte[4] ? 5 : 0}
        hatchLeft2={byte[1] ? 5 : 0}
        hatchRightColor="magenta"
        hatchRight={byte[3] ? 6 : 0}
        hatchRight2={byte[0] ? 6 : 0}
      />
    )
  },
}

export const Hatching = Template.bind({})
Hatching.args = {
  ...Default.args,
  cols: 6,
  rows: 6,
  childFunc: ({ width, height, i, totalCount }) => {
    const iteration = i >= totalCount / 2 ? i - totalCount / 2 : i
    return (
      <IsometricCube
        // outline={i >= totalCount / 2}
        inline={i >= totalCount / 2}
        height={height * 0.8}
        hatchTop={iteration}
        hatchTopColor="yellow"
        // hatchTop2={3}
        hatchLeft={iteration}
        hatchLeftColor="magenta"
        // hatchLeft2={5}
        hatchRight={iteration}
        hatchRightColor="cyan"
        // hatchRight2={7}
      />
    )
  },
}

export const Seamless = Template.bind({})
Seamless.args = {
  ...Default.args,
  cols: 10,
  rows: 11,
  trimOddEnds: true,
  childFunc: ({ width, height, i, totalCount, seed }) => {
    const hatchCount = 12
    const c = [
      '#201559',
      '#103e93',
      '#582280',
      '#201559',
      '#103e93',
      '#582280',
      '#201559',
      '#103e93',
      '#582280',
      '#201559',
      '#103e93',
      '#582280',
      '#009bb7',
    ]

    // const hatchCount = i > 16 ? 0 : i
    // const c = ['#000']

    return (
      <IsometricCube
        outline={false}
        inline={false}
        height={height}
        // hatchTop={hatchCount}
        hatchTopColor={sampleSeeded({ arr: c, seed: `${seed} top ${i}` })}
        hatchTop2={hatchCount}
        // hatchLeft={hatchCount}
        hatchLeftColor={sampleSeeded({ arr: c, seed: `${seed} left ${i}` })}
        hatchLeft2={hatchCount}
        hatchRight={hatchCount}
        hatchRightColor={sampleSeeded({ arr: c, seed: `${seed} right ${i}` })}
        // hatchRight2={hatchCount}
      />
    )
  },
}
