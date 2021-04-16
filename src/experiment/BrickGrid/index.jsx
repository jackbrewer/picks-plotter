import React from 'react'
import { number, string } from 'prop-types'

import Svg from '../../component/Svg'

import gridCells from '../../lib/grid-cells'
import shuffleArraySeeded from '../../lib/shuffle-array-seeded'

const svgs = require.context('./asset/', false, /\.svg$/)

const BrickGrid = ({
  printWidth,
  printHeight,
  width,
  height,
  seed,
  rows,
  cols,
}) => {
  const shuffledIndexes = shuffleArraySeeded({
    arr: [...Array(rows * cols).keys()],
    seed,
  })
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
        const SvgType = svgs(`./${cell.brickIndex}.svg`).default
        return (
          <g key={i}>
            <svg
              x={cell.x}
              y={cell.y}
              width={grid.width * 1}
              height={grid.height * 0.9}
            >
              <SvgType />
            </svg>
          </g>
        )
      })}
    </Svg>
  )
}

BrickGrid.defaultProps = {
  printWidth: 200,
  printHeight: 200,
  width: 200,
  height: 200,
  seed: '',
  rows: 6,
  cols: 4,
}

BrickGrid.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  seed: string,
  rows: number,
  cols: number,
}

export default BrickGrid
