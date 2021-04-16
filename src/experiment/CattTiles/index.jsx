import React from 'react'
import { bool, number, string } from 'prop-types'

import Svg from '../../component/Svg'

import gridCells from '../../lib/grid-cells'
import randomSeeded from '../../lib/random-seeded'
import mapRange from '../../lib/map-range'

import TileStraight from './component/TileStraight'
import TileCorner from './component/TileCorner'

const TileElMap = {
  a: TileStraight,
  b: TileCorner,
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
  typeThreshold,
  offset,
  offsetJoin,
}) => {
  const grid = gridCells({ width, height, rows, cols })
  const cells = grid.cells.map((cell, i) => ({
    ...cell,
    // type: randomSeeded(`${seed}:${i}:type`) > typeThreshold ? 'a' : 'b',
    // type:
    //   randomSeeded(`${seed}:${i}:type`) > (0.6 / grid.cells.length) * i + 0.4
    type:
      randomSeeded(`${seed}:${i}:type`) > (1 / grid.cells.length) * i
        ? 'a'
        : 'b',
    rotation:
      90 *
      Math.round(
        mapRange({
          value: randomSeeded(`${seed}:${i}:rot`),
          min1: 0,
          max1: 1,
          min2: 0,
          max2: 3,
        })
      ),
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
  typeThreshold: 0.8,
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
  typeThreshold: number,
  offset: bool,
  offsetJoin: bool,
}

export default CattTiles
