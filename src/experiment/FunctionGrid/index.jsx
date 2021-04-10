import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'

import gridCells from '../../lib/grid-cells'

const FunctionGrid = ({
  width,
  height,
  cols,
  rows,
  printWidth,
  printHeight,
}) => {
  const grid = gridCells({ width, height, rows, cols })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {grid.cells.map((cell, i) => {
        if ((cell.col ^ cell.row) % 9)
          return (
            <rect
              key={`cell:${i}`}
              width={grid.width}
              height={grid.height}
              x={cell.x}
              y={cell.y}
            />
          )
        return null
      })}
    </Svg>
  )
}

FunctionGrid.defaultProps = {
  printWidth: 160,
  printHeight: 160,
}

FunctionGrid.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  cols: number,
  rows: number,
}

export default FunctionGrid
