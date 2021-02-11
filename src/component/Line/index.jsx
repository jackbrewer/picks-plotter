import React from 'react'
import { number } from 'prop-types'

const Line = ({ x1, y1, x2, y2, ...other }) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    fill="none"
    stroke="#000"
    strokeWidth="1"
    {...other}
  />
)

Line.propTypes = {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
}

export default Line
