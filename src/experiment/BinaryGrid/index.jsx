import React from 'react'
import { arrayOf, bool, func, number } from 'prop-types'

import Svg from '../../component/Svg'

import generateBinaryBytes from '../../lib/generate-binary-bytes'

const BinaryGrid = ({
  width,
  height,
  cols,
  rows,
  childFunc,
  printWidth,
  printHeight,
  shuffle,
  highlights,
  bits,
}) => {
  const colWidth = width / cols
  const rowHeight = height / rows
  const totalCells = cols * rows

  const bytes = generateBinaryBytes({
    count: totalCells,
    bits,
    sort: true,
    shuffle,
  })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {[...Array(cols * rows).keys()].map((box, i) => {
        const colNumber = i % cols
        const rowNumber = Math.floor(i / cols)
        return (
          <g
            key={i}
            transform={`translate(${colNumber * colWidth}, ${
              rowNumber * rowHeight
            })`}
          >
            <g>
              {childFunc({
                width: colWidth,
                height: rowHeight,
                i,
                col: colNumber,
                row: rowNumber,
                byte: bytes[i],
                totalCount: totalCells,
                // Possibly broken since byte refactor
                // ...(highlights.length && {
                //   highlight: highlights
                //     .map((i) => parseInt(i, 10))
                //     .includes(bytes.indexOf(bytes[i])),
                // }),
              })}
            </g>
          </g>
        )
      })}
    </Svg>
  )
}

BinaryGrid.defaultProps = {
  childFunc: () => {},
  printWidth: 160,
  printHeight: 160,
  highlights: [],
  bits: 8,
}

BinaryGrid.propTypes = {
  width: number,
  height: number,
  cols: number,
  rows: number,
  childFunc: func,
  printWidth: number,
  printHeight: number,
  shuffle: bool,
  highlights: arrayOf(number),
  bits: number,
}

export default BinaryGrid
