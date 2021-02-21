import React from 'react'
import { arrayOf, bool, number } from 'prop-types'

import Rect from '../../../component/Rect'

const SquareGrid = ({ width, height, byte, highlight }) => {
  const size = Math.min(width, height)

  const area = size / 3
  const square = area * 0.75
  const gutter = (area - square) / 2

  const bitPoints = [
    { x: gutter, y: gutter },
    { x: gutter * 3 + square, y: gutter },
    { x: gutter * 5 + square * 2, y: gutter },
    { x: gutter, y: gutter * 3 + square },
    { x: gutter * 5 + square * 2, y: gutter * 3 + square },
    { x: gutter, y: gutter * 5 + square * 2 },
    { x: gutter * 3 + square, y: gutter * 5 + square * 2 },
    { x: gutter * 5 + square * 2, y: gutter * 5 + square * 2 },
  ]

  return (
    <g>
      {byte.map((bit, i) => {
        if (!bit) return null
        return (
          <Rect
            key={i}
            width={square}
            height={square}
            x={bitPoints[i].x}
            y={bitPoints[i].y}
            stroke={highlight ? 'teal' : 'black'}
          />
        )
      })}
    </g>
  )
}

SquareGrid.propTypes = {
  byte: arrayOf(number),
  width: number,
  height: number,
  highlight: bool,
}

export default SquareGrid
