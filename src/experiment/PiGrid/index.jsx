import React from 'react'
import { func, number } from 'prop-types'

import piString from './pi-string'

import Svg from '../../component/Svg'

const PiGrid = ({
  width,
  height,
  cols,
  rows,
  childFunc,
  printWidth,
  printHeight,
}) => {
  const colWidth = width / cols
  const rowHeight = height / rows

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {[...Array(cols * rows).keys()].map((i) => {
        const colNumber = i % cols
        const rowNumber = Math.floor(i / cols)

        return (
          <g
            key={i}
            transform={`translate(${colNumber * colWidth}, ${
              rowNumber * rowHeight
            })`}
          >
            {/* <Rect width={colWidth} height={rowHeight} /> */}
            <g>
              {childFunc({
                width: colWidth,
                height: rowHeight,
                i,
                col: colNumber,
                row: rowNumber,
                totalCount: cols * rows,
                digit: piString[i],
              })}
            </g>
          </g>
        )
      })}
    </Svg>
  )
}

PiGrid.defaultProps = {
  childFunc: () => {},
  printWidth: 160,
  printHeight: 160,
}

PiGrid.propTypes = {
  width: number,
  height: number,
  cols: number,
  rows: number,
  childFunc: func,
  printWidth: number,
  printHeight: number,
}

export default PiGrid
