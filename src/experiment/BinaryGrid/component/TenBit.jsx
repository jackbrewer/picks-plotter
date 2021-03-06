import React from 'react'
import { arrayOf, bool, number } from 'prop-types'

import Polyline from '../../../component/Polyline'
// import Circle from '../../../component/Circle'

const TenBit = ({ width, height, byte, highlight }) => {
  const size = Math.min(width, height)
  const c = size / 2
  const bitPoints = [
    // Diagonal
    // [[c - 500, 0], [width + 500, c - 500], '#000'],
    // Horizontal
    [
      [0, 0],
      [width, 0],
    ],
    [
      [0, height * 0.2],
      [width, height * 0.2],
    ],
    [
      [0, height * 0.4],
      [width, height * 0.4],
    ],
    [
      [0, height * 0.6],
      [width, height * 0.6],
    ],
    [
      [0, height * 0.8],
      [width, height * 0.8],
    ],
    [
      [0, height],
      [width, height],
    ],
    // Vertical
    [
      [0, 0],
      [0, height],
    ],
    [
      [c, 0],
      [c, height],
    ],
    [
      [width, 0],
      [width, height],
    ],
  ]

  return (
    <g>
      {/* <Circle
        r={c}
        cx={c}
        cy={c}
        strokeWidth={highlight ? 1 : 0.1}
        stroke={highlight ? 'teal' : 'grey'}
      /> */}
      {byte.map((bit, i) => {
        if (!bit) return null
        if (!bitPoints[i]) return null
        return (
          <Polyline
            key={i}
            points={[bitPoints[i][0], bitPoints[i][1]]}
            stroke={bitPoints[i][2] || 'grey'}
          />
        )
      })}
    </g>
  )
}

TenBit.propTypes = {
  byte: arrayOf(number),
  width: number,
  height: number,
  highlight: bool,
}

export default TenBit
