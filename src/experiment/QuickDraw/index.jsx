import React from 'react'
import { bool, number, string } from 'prop-types'

import Svg from '../../component/Svg'

// import Drawings from './source/drawings.svg'
// import Drawings from './source/flying saucers.svg'
import Drawings from './source/flowers.svg'

// import randomSeeded from '../../lib/random-seeded'
import gridCells from '../../lib/grid-cells'
import shuffleArraySeeded from '../../lib/shuffle-array-seeded'

const QuickDraw = ({
  printWidth,
  printHeight,
  seed,
  rows,
  cols,
  shuffle,
  scale,
}) => {
  const drawingViewBox = Drawings().props.viewBox.split(' ')
  const width = drawingViewBox[2] * cols
  const height = drawingViewBox[3] * rows
  const validChildren = React.Children.toArray(
    Drawings().props.children
  ).filter((c) => c.type === 'g')
  // const indexes = [...Array(rows * cols).keys()]
  const indexes = [...Array(validChildren.length).keys()]
  const shuffledIndexes = shuffle
    ? shuffleArraySeeded({ arr: indexes, seed })
    : indexes
  const grid = gridCells({ width, height, rows, cols })
  const cells = grid.cells.map((cell, i) => ({
    ...cell,
    drawingIndex: shuffledIndexes[i],
  }))

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
      strokeWidth={4}
    >
      {cells.map((cell, i) => {
        return (
          <g key={i} transform={`translate(${cell.x}, ${cell.y})`}>
            <g
              transform={`translate(${grid.width * (1 - scale) * 0.5}, ${
                grid.height * (1 - scale) * 0.5
              }) scale(${scale})`}
            >
              {validChildren[cell.drawingIndex] && (
                <>
                  {/* <rect x={0} y={0} width={grid.width} height={grid.height} /> */}
                  {validChildren[cell.drawingIndex]}
                </>
              )}
            </g>
          </g>
        )
      })}
    </Svg>
  )
}

QuickDraw.defaultProps = {
  printWidth: 210,
  printHeight: 297,
  seed: '',
  rows: 10,
  cols: 7,
  scale: 0.8,
}

QuickDraw.propTypes = {
  printWidth: number,
  printHeight: number,
  seed: string,
  rows: number,
  cols: number,
  shuffle: bool,
  scale: number,
}

export default QuickDraw
