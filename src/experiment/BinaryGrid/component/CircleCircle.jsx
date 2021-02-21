import React from 'react'
import { arrayOf, bool, number } from 'prop-types'

import Circle from '../../../component/Circle'

const SquareGrid = ({ width, height, byte, highlight }) => {
  const size = Math.min(width, height)
  const c = size / 2

  return (
    <g>
      <Circle r={c} cx={c} cy={c} strokeWidth="0.1" stroke="grey" />
      {byte.map((bit, i) => {
        if (!bit) return null
        return (
          <Circle
            key={i}
            r={size / 5}
            cx={c}
            cy={size / 4}
            transform={`rotate(${(360 / byte.length) * i}, ${c}, ${c})`}
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
