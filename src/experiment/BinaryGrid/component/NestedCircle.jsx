import React from 'react'
import { arrayOf, number } from 'prop-types'

import Circle from '../../../component/Circle'

const NestedCircle = ({ width, height, byte }) => {
  const size = Math.min(width, height)
  const c = size / 2
  const r = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  // const color = [
  //   'blue',
  //   'magenta',
  //   'indigo',
  //   'pink',
  //   'purple',
  //   'lightblue',
  //   'red',
  //   'violet',
  // ]

  return (
    <g>
      {byte.map((bit, i) => {
        if (!bit) return null
        return (
          <Circle
            key={`NestedCircle:${i}`}
            r={c * r[i]}
            cx={c}
            cy={c}
            strokeWidth={bit ? 1 : 0.1}
            stroke={i % 2 ? 'red' : 'blue'}
            // stroke={color[i]}
          />
        )
      })}
    </g>
  )
}

NestedCircle.propTypes = {
  byte: arrayOf(number),
  width: number,
  height: number,
}

export default NestedCircle
