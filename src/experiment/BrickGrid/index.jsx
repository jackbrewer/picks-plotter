import React from 'react'
import { bool, number, oneOf, string } from 'prop-types'

import Svg from '../../component/Svg'

import randomSeeded from '../../lib/random-seeded'
import gridCells from '../../lib/grid-cells'
import shuffleArraySeeded from '../../lib/shuffle-array-seeded'

import BrickStacked from './brick-24-stacked.svg'

const getFlip = ({ seed, flipMode, i }) => {
  if (flipMode === 'none') return false
  if (flipMode === 'all') return true
  if (flipMode === 'alternate') return i % 2 === 0
  if (flipMode === 'random') return randomSeeded(seed) > 0.5
}

const BrickGrid = ({
  printWidth,
  printHeight,
  seed,
  rows,
  cols,
  xOffset,
  yOffset,
  flipMode,
  shuffle,
}) => {
  const brickViewBox = BrickStacked().props.viewBox.split(' ')
  const width = brickViewBox[2] * cols * xOffset
  const height = brickViewBox[3] * rows * yOffset
  const validChildren = React.Children.toArray(BrickStacked().props.children)
  const indexes = [...Array(rows * cols).keys()]
  const shuffledIndexes = shuffle
    ? shuffleArraySeeded({ arr: indexes, seed })
    : indexes
  const grid = gridCells({ width, height, rows, cols })
  const cells = grid.cells.map((cell, i) => ({
    ...cell,
    brickIndex: shuffledIndexes[i],
  }))

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {cells.map((cell, i) => {
        return (
          <g key={i} transform={`translate(${cell.x}, ${cell.y})`}>
            <g
              transform={
                getFlip({ seed: `flip:${seed}:${i}`, flipMode, i })
                  ? `translate(${brickViewBox[2]}, 0) scale(-1, 1)`
                  : ''
              }
            >
              <>{validChildren[cell.brickIndex]}</>
            </g>
          </g>
        )
      })}
    </Svg>
  )
}

BrickGrid.defaultProps = {
  printWidth: 210,
  printHeight: 297,
  seed: '',
  rows: 6,
  cols: 4,
  xOffset: 1,
  yOffset: 1.1,
  flipMode: 'none',
  shuffle: true,
}

BrickGrid.propTypes = {
  printWidth: number,
  printHeight: number,
  seed: string,
  rows: number,
  cols: number,
  xOffset: number,
  yOffset: number,
  flipMode: oneOf(['all', 'alternate', 'none', 'random']),
  shuffle: bool,
}

export default BrickGrid
