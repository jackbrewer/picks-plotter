import React from 'react'
import { arrayOf, bool, number, oneOf, string } from 'prop-types'

import Svg from '../../component/Svg'

import gridCells from '../../lib/grid-cells'
import randomSeeded from '../../lib/random-seeded'
import mapRange from '../../lib/map-range'

import TileStraight from './component/TileStraight'
import TileCorner from './component/TileCorner'
import TileCross from './component/TileCross'

const TileElMap = {
  a: TileStraight,
  b: TileCorner,
  c: TileCross,
}

const CattTiles = ({
  width,
  height,
  cols,
  rows,
  printWidth,
  printHeight,
  lines,
  seed,
  offset,
  offsetJoin,
  thresholds,
  thresholdsType,
  edges,
  rotationType,
}) => {
  const getTileType = ({ thresholds, thresholdsType, i, rows, cols }) => {
    if (thresholdsType === 'straight') return 'a'
    if (thresholdsType === 'corners') return 'b'
    if (thresholdsType === 'random') {
      return randomSeeded(`${seed}:${i}:type`) > thresholds[0] ? 'a' : 'b'
    }
    if (thresholdsType === 'linear') {
      return randomSeeded(`${seed}:${i}:type`) > (1 / grid.cells.length) * i
        ? 'a'
        : 'b'
    }
    if (thresholdsType === 'linearish') {
      return randomSeeded(`${seed}:${i}:type`) >
        (0.6 / grid.cells.length) * i + 0.4
        ? 'a'
        : 'b'
    }
    if (thresholdsType === 'alternate') {
      return i % 2 === 0 ? 'a' : 'b'
    }
    if (thresholdsType === 'half') {
      return i < Math.floor(rows / 2) * cols ? 'a' : 'b'
    }
  }

  const getRotationType = ({ rotationType, i }) => {
    if (rotationType === 'none') {
      return 0
    }
    if (rotationType === 'horizontal') {
      return randomSeeded(`${seed}:${i}:rot`) < 0.5 ? 0 : 180
    }
    if (rotationType === 'vertical') {
      return randomSeeded(`${seed}:${i}:rot`) < 0.5 ? 90 : 270
    }
    if (rotationType === 'loop') {
      return 90 * (i % 4)
    }
    if (rotationType === 'random') {
      return (
        90 *
        Math.round(
          mapRange({
            value: randomSeeded(`${seed}:${i}:rot`),
            min1: 0,
            max1: 1,
            min2: 0,
            max2: 3,
          })
        )
      )
    }
    if (rotationType === 'twos') {
      return 90 * (i % 2)
    }
    if (rotationType === 'threes') {
      return 90 * (i % 3)
    }
  }

  const grid = gridCells({ width, height, rows, cols })
  const cells = grid.cells.map((cell, i) => ({
    ...cell,
    type: getTileType({
      value: randomSeeded(`${seed}:${i}:type`),
      thresholds,
      thresholdsType,
      i,
      rows,
      cols,
    }),
    rotation: getRotationType({ rotationType, i }),
  }))

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {cells.map((cell, i) => {
        const TileEl = TileElMap[cell.type]
        return (
          <TileEl
            key={`cell:${i}`}
            w={grid.width}
            h={grid.height}
            lines={lines}
            x={cell.x}
            y={cell.y}
            rot={cell.rotation}
            offset={offset}
            offsetJoin={offsetJoin}
            edges={edges}
          />
        )
      })}
    </Svg>
  )
}

CattTiles.defaultProps = {
  printWidth: 160,
  printHeight: 160,
  lines: 10,
  thresholds: [0.5, 1],
  thresholdsType: 'random',
  rotationType: 'random',
}

CattTiles.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  cols: number,
  rows: number,
  lines: number,
  seed: string,
  offset: bool,
  offsetJoin: bool,
  thresholds: arrayOf(string),
  thresholdsType: oneOf([
    'corners',
    'straight',
    'random',
    'linear',
    'linearish',
    'alternate',
    'half',
  ]),
  edges: bool,
  rotationType: oneOf([
    'none',
    'horizontal',
    'vertical',
    'random',
    'loop',
    'twos',
    'threes',
  ]),
}

export default CattTiles
