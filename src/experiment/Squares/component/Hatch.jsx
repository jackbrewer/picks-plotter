import React from 'react'
import { number } from 'prop-types'

import Line from '../../../component/Line'

export const Hatch = ({
  width,
  height,
  strokeWidth,
  space,
  rotate,
  ...other
}) => {
  const center = { x: width / 2, y: height / 2 }
  const count = Math.ceil(Math.max(width, height) / space)
  return (
    <g transform={`skewY(${rotate})`} style={{ transformOrigin: '50% 50%' }}>
      {[...Array(count * 2).keys()].map((i) => (
        <Line
          key={i}
          strokeWidth={strokeWidth}
          x1={0}
          y1={center.y + space * (i - count) + space * 0.5}
          x2={width}
          y2={center.y + space * (i - count) + space * 0.5}
          {...other}
        />
      ))}
    </g>
  )
}

Hatch.defaultProps = {
  rotate: 0,
  space: 10,
}

Hatch.propTypes = {
  width: number,
  height: number,
  strokeWidth: number,
  space: number,
  rotate: number,
}

export default Hatch
