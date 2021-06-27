import React from 'react'

import randomSeeded from '../../lib/random-seeded'
import sampleSeeded from '../../lib/sample-seeded'
import mapRange from '../../lib/map-range'

import HexGrid from './'
import Frame from '../../structure/Frame'

import HatchedCircle from '../../component/HatchedCircle'
import Hexagon from '../../component/Hexagon'
import IsometricCube from '../../component/IsometricCube'
import generateBinaryBytes from '../../lib/generate-binary-bytes'

export default {
  title: 'Example/HexGrid',
  component: HexGrid,
}

const Template = (args) => (
  <Frame name="HexGrid" seeded refresh>
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

const getDensity = ({ seed, min, max }) => {
  return Math.round(
    mapRange({
      value: seed,
      min1: 0,
      max1: 1,
      min2: min,
      max2: max,
    })
  )
}
export const CircleHatching = Template.bind({})
CircleHatching.args = {
  ...Default.args,
  cols: 10,
  rows: 12,
  childFunc: ({
    width,
    height,
    col,
    row,
    colsCount,
    rowsCount,
    i,
    totalCount,
    seed,
  }) => {
    const yOff = col / colsCount
    const mOff = 1 - col / colsCount
    const cOff = row / rowsCount

    return (
      <HatchedCircle
        key={`point${i}`}
        cx={width / 2}
        cy={height / 2}
        r={width / 2}
        r2={width / 2}
        rotation={mapRange({
          value: randomSeeded(`${i}:${seed}:rotation`),
          min1: 0,
          max1: 1,
          min2: 0,
          max2: 360,
        })}
        strokeWidth="0.2"
        layers={[
          {
            density: getDensity({
              seed: randomSeeded(`${i}:${seed}:1`),
              min: 5 + 10 * yOff,
              max: 10 + 20 * yOff,
            }),
            color: 'yellow',
          },
          {
            density: getDensity({
              seed: randomSeeded(`${i}:${seed}:2`),
              min: 5 + 10 * mOff,
              max: 10 + 10 * mOff,
            }),
            color: 'magenta',
          },
          {
            density: getDensity({
              seed: randomSeeded(`${i}:${seed}:3`),
              min: 5 + 10 * cOff,
              max: 10 + 20 * cOff,
            }),
            color: 'cyan',
          },
        ]}
      />
    )
  },
}
export const CircleHatchingAlt = Template.bind({})
CircleHatchingAlt.args = {
  ...Default.args,
  printWidth: 210,
  printHeight: 300,
  cols: 10,
  rows: 15,
  multiply: true,
  childFunc: ({
    width,
    height,
    col,
    row,
    colsCount,
    rowsCount,
    i,
    totalCount,
    seed,
  }) => {
    const yOff = col / colsCount
    const mOff = 1 - col / colsCount
    const cOff = row / rowsCount

    return (
      <HatchedCircle
        key={`point${i}`}
        cx={width / 2}
        cy={height / 2}
        r={width}
        r2={width / 2}
        rotation={mapRange({
          value: randomSeeded(`${i}:${seed}:rotation`),
          min1: 0,
          max1: 1,
          min2: 0,
          max2: 360,
        })}
        strokeWidth="0.3"
        outline={false}
        lineSkipChance={0.1}
        lineMinOffset={0}
        lineMaxOffset={2}
        layers={[
          {
            density: getDensity({
              seed: randomSeeded(`${i}:${seed}:1`),
              min: 5 + 30 * yOff,
              max: 20 + 30 * yOff,
            }),
            color: 'yellow',
          },
          {
            density: getDensity({
              seed: randomSeeded(`${i}:${seed}:2`),
              min: 5 + 30 * mOff,
              max: 20 + 30 * mOff,
            }),
            color: 'magenta',
          },
          {
            density: getDensity({
              seed: randomSeeded(`${i}:${seed}:3`),
              min: 5 + 30 * cOff,
              max: 20 + 30 * cOff,
            }),
            color: 'cyan',
          },
        ]}
      />
    )
  },
}
