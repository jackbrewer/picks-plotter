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
    fill="none"
    stroke="#000"
    strokeWidth="1"
    {...other}
  />
)

Rect.propTypes = {
  x: number,
  y: number,
  width: number,
  height: number,
  rx: number,
  ry: number,
}

export default Rect
