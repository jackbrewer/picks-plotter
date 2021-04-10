/* eslint-disable react/prop-types */
import React from 'react'

import randomInt from '../../lib/random-int'

import PiGrid from './'
import Frame from '../../structure/Frame'
import Circle from '../../component/Circle'
import Polygon from '../../component/Polygon'
import Polyline from '../../component/Polyline'

export default {
  title: 'Example/PiGrid',
  component: PiGrid,
}

const Template = (args) => (
  <Frame name="PiGrid">
    <PiGrid {...args} />
  </Frame>
)

const width = 2000
const height = width / 1.5
const printWidth = 200
const printHeight = (height / width) * printWidth

export const Default = Template.bind({})
Default.args = {
  width,
  height,
  printWidth,
  printHeight,
  cols: 20 * 2,
  rows: 15 * 2,
}

const colors = [
  'black',
  'red',
  'orange',
  'lime',
  'green',
  'lightblue',
  'blue',
  'purple',
  'magenta',
  'brown',
]

export const Diagonals = Template.bind({})
Diagonals.args = {
  ...Default.args,
  childFunc: ({
    width,
    height,
    i,
    // col,
    // row,
    totalCount,
    digit,
  }) => {
    const corners = parseInt(digit, 10)
    const r =
      Math.min(width, height) / 2 -
      ((Math.min(width, height) / totalCount) * i) / 2
    const cx = width / 2
    const cy = height / 2
    const rotationOffset = randomInt(0, 359)
    // const rotationOffset = (360 / totalCount) * i

    if (corners === 0) {
      return (
        <g transform={`rotate(${rotationOffset}, ${cx}, ${cy})`}>
          <Polyline
            points={[
              [cx, cy - r * 0.9],
              [cx, cy + r * 0.9],
            ]}
            stroke={colors[0]}
          />
          <Polyline
            points={[
              [cx - r * 0.9, cy],
              [cx + r * 0.9, cy],
            ]}
            stroke={colors[0]}
          />
        </g>
      )
    }
    if (corners === 1) {
      return <Circle {...{ corners, r, cx, cy }} stroke={colors[1]} />
    }
    // if (corners === 2) {
    //   return <Circle {...{ corners, r: r * 3, cx, cy, rotationOffset }} />
    // }
    return (
      <Polygon
        {...{ corners, r, cx, cy, rotationOffset }}
        stroke={colors[corners]}
      />
    )
  },
}
