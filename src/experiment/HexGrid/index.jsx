import React from 'react'
import { bool, func, number, string } from 'prop-types'

import Svg from '../../component/Svg'

import pythagoras from '../../lib/pythagoras'

const HexGrid = ({
  // width,
  // height,
  size,
  cols,
  rows,
  childFunc,
  printWidth,
  printHeight,
  seed,
  trimOddEnds,
}) => {
  const radius = size / 2
  // const hex = {
  //   height: size,
  //   sideLength: radius,
  //   width: radius * Math.sqrt(3),
  //   perimiter: radius * 6,
  // }

  const colWidth = radius * Math.sqrt(3)
  const rowHeight = size
  const rowOverlapHeight = pythagoras({ a: colWidth / 2, c: radius })

  const rawWidth = colWidth * cols + colWidth / 2
  const width = trimOddEnds ? rawWidth - colWidth / 2 : rawWidth
  const height = rows * (rowHeight - rowOverlapHeight) + rowOverlapHeight

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {[...Array(cols * rows).keys()].map((i) => {
        const colNumber = i % cols
        const rowNumber = Math.floor(i / cols)
        const oddRow = rowNumber % 2

        if (trimOddEnds) {
          const oddEnd = oddRow && colNumber === cols - 1
          if (oddEnd) return null
        }

        return (
          <g
            key={i}
            transform={`translate(${
              colNumber * colWidth + (oddRow ? colWidth / 2 : 0)
            }, ${rowNumber * (rowHeight - rowOverlapHeight)})`}
          >
            <g>
              {childFunc({
                width: colWidth,
                height: rowHeight,
                i,
                col: colNumber,
                row: rowNumber,
                totalCount: cols * rows,
                seed,
              })}
            </g>
          </g>
        )
      })}
    </Svg>
  )
}

HexGrid.defaultProps = {
  childFunc: () => {},
  printWidth: 160,
  printHeight: 160,
  seed: '',
}

HexGrid.propTypes = {
  size: number,
  cols: number,
  rows: number,
  childFunc: func,
  printWidth: number,
  printHeight: number,
  seed: string,
  trimOddEnds: bool,
}

export default HexGrid
