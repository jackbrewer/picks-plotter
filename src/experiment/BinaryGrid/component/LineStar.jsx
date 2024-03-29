import React from 'react'
import { arrayOf, bool, number } from 'prop-types'

import Polyline from '../../../component/Polyline'
import Circle from '../../../component/Circle'

const LineStar = ({ width, height, byte, highlight }) => {
  const size = Math.min(width, height)
  const c = size / 2
  const bitPoints = [
    [c, 0],
    [size, 0],
    [size, c],
    [size, size],
    [c, size],
    [0, size],
    [0, c],
    [0, 0],
  ]

  return (
    <g>
      <Circle
        r={c}
        cx={c}
        cy={c}
        strokeWidth={highlight ? 1 : 0.1}
        stroke={highlight ? 'teal' : 'grey'}
      />
      {byte.map((bit, i) => {
        if (!bit) return null
        return <Polyline key={i} points={[[c, c], bitPoints[i]]} />
      })}
    </g>
  )
}

LineStar.propTypes = {
  byte: arrayOf(number),
  width: number,
  height: number,
  highlight: bool,
}

export default LineStar
