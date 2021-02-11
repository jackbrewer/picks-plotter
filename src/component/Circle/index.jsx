import React from 'react'
import { number } from 'prop-types'

const Circle = ({ cx, cy, r, ...other }) => (
  <circle
    cx={cx}
    cy={cy}
    r={r}
    fill="none"
    stroke="#000"
    strokeWidth="1"
    {...other}
  />
)

Circle.propTypes = {
  cx: number,
  cy: number,
  r: number,
}

export default Circle
