import React from 'react'
import { number } from 'prop-types'

const Rect = ({ x, y, width, height, rx, ry, ...other }) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    rx={rx || ry}
    ry={ry || rx}
    {...other}
  />
)

Rect.propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  rx: number,
  ry: number,
}

export default Rect
