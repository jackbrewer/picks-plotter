import React from 'react'
import { arrayOf, bool, func, number } from 'prop-types'

import shuffleArray from '../../lib/shuffle-array'

import Svg from '../../component/Svg'

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
}) => {
  const colWidth = width / cols
  const rowHeight = height / rows
  const totalCells = cols * rows

  const bytes = [...Array(totalCells).keys()]
    .map((i) =>
      (i >>> 0)
        .toString(2)
        .padStart(8, '0') // TODO: work this out dynamically
        .split('')
        .map((j) => +j)
    )
    // Sort by number of lines in each circle
    .sort((a, b) => {
      const totalA = a.reduce((c, d) => c + d, 0)
      const totalB = b.reduce((c, d) => c + d, 0)
      return totalA < totalB ? -1 : 1
    })
    // Sort within the line-sorted sections
    .sort((a, b) => {
      const totalA = a.reduce((c, d) => c + d, 0)
      const totalB = b.reduce((c, d) => c + d, 0)
      if (totalA === totalB) {
        return a.join('') > b.join('') ? -1 : 1
      }
      return 0
    })

  const readyBytes = shuffle ? shuffleArray([...bytes]) : bytes

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
                byte: readyBytes[i],
                totalCount: totalCells,
                ...(highlights.length && {
                  highlight: highlights
                    .map((i) => parseInt(i, 10))
                    .includes(bytes.indexOf(readyBytes[i])),
                }),
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
}

export default BinaryGrid
