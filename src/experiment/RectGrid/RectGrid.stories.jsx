import React from 'react'

import RectGrid from './'
import Frame from '../../component/Frame'

import randomInt from '../../lib/random-int'
import uniquePermutations from '../../lib/unique-permutations'
import shuffleArray from '../../lib/shuffle-array'

import Cross from '../../experiment/Squares/component/Cross'
import Rect from '../../component/Rect'
import Polyline from '../../component/Polyline'
import Blob from '../../component/Blob'
import Circle from '../../component/Circle'
import Line from '../../component/Line'

export default {
  title: 'Example/RectGrid',
  component: RectGrid,
}

const Template = (args) => (
  <Frame args={args} name="RectGrid">
    <RectGrid {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  // debug: true,
  width: 400,
  height: 400,
  cols: 19,
  rows: 19,
}

export const Diagonals = Template.bind({})
Diagonals.args = {
  ...Default.args,
  childFunc: ({ width, height, i, totalCount }) => (
    <g transform={`translate(${width * 0.1}, ${height * 0.1})`}>
      <Cross size={width * 0.8} rotate={(360 / totalCount) * i} />
    </g>
  ),
}

export const DiagonalsRandom = Template.bind({})
DiagonalsRandom.args = {
  ...Default.args,
  childFunc: ({ width, height, i, totalCount }) => (
    <g transform={`translate(${width * 0.1}, ${height * 0.1})`}>
      <Cross
        size={width * 0.8}
        rotate={(360 / totalCount) * randomInt(1, totalCount)}
      />
    </g>
  ),
}

export const FallingSquares = Template.bind({})
FallingSquares.args = {
  ...Default.args,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    const angle =
      ((col / 2 + row) * (Math.round(Math.random()) ? 0.5 : -0.5)) / 2
    const scale = 1 - i / 1000
    const scaleOffset = (width - width * scale) / 2
    return (
      <g
        transform={`translate(${scaleOffset}, ${scaleOffset}) scale(${scale})`}
      >
        <Rect
          width={width}
          height={height}
          strokeWidth={0.5}
          transform={`rotate(${angle}, ${width / 2}, ${height / 2})`}
        />
      </g>
    )
  },
}

export const DiagonalLines = Template.bind({})
DiagonalLines.args = {
  ...Default.args,
  cols: 40,
  rows: 40,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    const lines = [
      [
        [0, 0],
        [width, height],
      ],
      [
        [width, 0],
        [0, height],
      ],
    ]
    return <Polyline points={lines[randomInt(0, 1)]} />
  },
}

export const StraightLines = Template.bind({})
StraightLines.args = {
  ...Default.args,
  cols: 34,
  rows: 34,
  printWidth: 80,
  printHeight: 80,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    const c = { x: width / 2, y: height / 2 }
    const lines = [
      [
        [c.x, 0],
        [c.x, height],
      ],
      [
        [0, c.y],
        [width, c.y],
      ],
      [
        [c.x, 0],
        [c.x, c.y],
        [0, c.y],
      ],
      [
        [0, c.y],
        [c.x, c.y],
        [c.x, height],
      ],
      [
        [c.x, height],
        [c.x, c.y],
        [width, c.y],
      ],
      [
        [width, c.y],
        [c.x, c.y],
        [c.x, 0],
      ],
    ]
    return <Polyline points={lines[randomInt(0, 5)]} />
  },
}

export const StraightLines2 = Template.bind({})
StraightLines2.args = {
  ...Default.args,
  cols: 12,
  rows: 12,
  printWidth: 140,
  printHeight: 140,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    const lines = [...Array(row + 1).keys()].map((j) => {
      return (height / (row + 2)) * (j + 1)
    })
    return (
      <g
        transform={`rotate(${(row + col) % 2 ? -90 : 0}, ${width / 2}, ${
          height / 2
        })`}
      >
        {lines.map((y, i) => {
          const points = [
            [0, y],
            [width, y],
          ]
          return (
            <Polyline
              key={`line:${y}`}
              points={i % 2 ? points : points.reverse()}
            />
          )
        })}
      </g>
    )
  },
}

export const Scales = Template.bind({})
Scales.args = {
  ...Default.args,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    return (
      <g>
        <path
          d={[
            `M ${0}, ${0}`,
            `a ${height / 2}, ${width / 2} 1,0,0 ${width}, ${height}`,
          ]}
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
      </g>
    )
  },
}

export const QuarterCircles = Template.bind({})
QuarterCircles.args = {
  ...Default.args,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    // const a = Math.round((row * col) / 2)
    // const lines = 1 + (a % 2 === 0 ? a : a - 1) / 2

    const lines = 2
    return (
      <g
        transform={`rotate(${randomInt(0, 3) * 90}, ${width / 2}, ${
          height / 2
        })`}
      >
        {[...Array(lines).keys()].map((i) => {
          const m = (1 / lines) * (i + 1)
          return (
            <path
              key={i}
              d={[
                `M ${0}, ${height * (1 - m)}`,
                `A ${height * m}, ${width * m} 0,0,1 ${width * m}, ${height}`,
              ]}
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
          )
        })}
      </g>
    )
  },
}

export const Blobs = Template.bind({})
Blobs.args = {
  ...Default.args,
  cols: 40,
  rows: 40,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    const size = Math.min(width, height)
    return (
      <g transform={`rotate(${Math.cos(i) + i}, ${width / 2}, ${height / 2})`}>
        <Blob sizeMin={size * 0.8} sizeMax={size * 0.9} />
        {/* <Blob sizeMin={size * 0.8} sizeMax={size * 0.9} /> */}
        {/* <Blob sizeMin={size * 0.6} sizeMax={size * 0.8} /> */}
        {/* <Blob sizeMin={size * 0.6} sizeMax={size * 0.8} /> */}
        <Blob sizeMin={size * 0.4} sizeMax={size * 0.6} />
        {/* <Blob sizeMin={size * 0.4} sizeMax={size * 0.6} /> */}
      </g>
    )
  },
}

export const FourBits = Template.bind({})
FourBits.args = {
  ...Default.args,
  cols: 4,
  rows: 4,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    const size = Math.min(width, height)
    const c = size / 2
    const bits = (i >>> 0)
      .toString(2)
      .padStart(4, '0')
      .split('')
      .map((j) => +j)

    return (
      <g transform={`rotate(${45}, ${c}, ${c})`}>
        <Circle r={c} cx={c} cy={c} />
        {bits[0] && (
          <Polyline
            points={[
              [c, c],
              [c, 0],
            ]}
          />
        )}
        {bits[1] && (
          <Polyline
            points={[
              [c, c],
              [size, c],
            ]}
          />
        )}
        {bits[2] && (
          <Polyline
            points={[
              [c, c],
              [c, size],
            ]}
          />
        )}
        {bits[3] && (
          <Polyline
            points={[
              [c, c],
              [0, c],
            ]}
          />
        )}
      </g>
    )
  },
}

const colors = ['blue', 'magenta', 'orange', 'red']
const wires = 'abcd'
const wiresPermutations = uniquePermutations(wires)

export const Wires = Template.bind({})
Wires.args = {
  ...Default.args,
  width: 400,
  height: 400,
  cols: 24,
  rows: 24,
  childFunc: ({ width, height, i, col, row, totalCount }) => {
    // console.log({ row, col })
    // console.log({ row, col }, wiresPermutations[row], wiresPermutations[col])

    const starts = wiresPermutations[row]
      .split('')
      .map((_, j) => j * ((height * 0.8) / wires.length) + height * 0.2)
    const ends = wiresPermutations[col]
      .split('')
      .map(
        (perm) =>
          wires.indexOf(perm) * ((height * 0.8) / wires.length) + height * 0.2
      )

    return (
      <g>
        {/* <Circle r={c} cx={c} cy={c} strokeWidth={0.1} stroke="grey" /> */}
        {wiresPermutations[row].split('').map((color, k) => {
          return (
            <Polyline
              key={k}
              points={[
                [width * 0.1, starts[k]],
                [width * 0.2, starts[k]],
                [width * 0.8, ends[k]],
                [width * 0.9, ends[k]],
              ]}
              stroke={colors[wires.split('').indexOf(color)]}
            />
          )
        })}
      </g>
    )
  },
}
