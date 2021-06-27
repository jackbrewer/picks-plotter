import React from 'react'
import { number, string } from 'prop-types'

import Svg from '../../component/Svg'

import gridCells from '../../lib/grid-cells'
import shuffleArraySeeded from '../../lib/shuffle-array-seeded'

import PickStacked from './pick-stacked.svg'

const PickGrid = ({
  printWidth,
  printHeight,
  seed,
  rows,
  cols,
  xOffset,
  yOffset,
}) => {
  const pickViewBox = PickStacked().props.viewBox.split(' ')
  const width = pickViewBox[2] * cols * xOffset
  const height = pickViewBox[3] * rows * yOffset
  const validChildren = React.Children.toArray(
    PickStacked().props.children
  ).filter((c) => c.type === 'g')
  // const indexes = [...Array(rows * cols).keys()]
  const indexes = [...Array(validChildren.length).keys()]
  const grid = gridCells({ width, height, rows, cols })
  const cells = grid.cells.map((cell, i) => ({
    ...cell,
    pickIndex: indexes[i],
  }))
  // const formattedColours = getColours({
  //   randomColours,
  //   seed,
  //   colours,
  //   arr: indexes,
  // })

  const xCellOff = (grid.width - pickViewBox[2]) / 2
  const yCellOff = (grid.height - pickViewBox[3]) / 2

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {cells.map((cell, i) => {
        const pick = shuffleArraySeeded({
          seed: `pick:${seed}:${i}`,
          arr: validChildren,
        })[0] // TODO: more logic if more pick types
        return (
          <g key={i} transform={`translate(${cell.x}, ${cell.y})`}>
            <g transform={`translate(${xCellOff}, ${yCellOff})`}>
              {React.cloneElement(pick, {})}
            </g>
          </g>
        )
      })}
    </Svg>
  )
}

PickGrid.defaultProps = {
  printWidth: 210,
  printHeight: 297,
  seed: '',
  rows: 7,
  cols: 6,
  xOffset: 1.4,
  yOffset: 1.4,
}

PickGrid.propTypes = {
  printWidth: number,
  printHeight: number,
  seed: string,
  rows: number,
  cols: number,
  xOffset: number,
  yOffset: number,
}

export default PickGrid
