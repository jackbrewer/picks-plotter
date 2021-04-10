import React from 'react'
import { number } from 'prop-types'

const Circle = ({ cx, cy, r, ...other }) => (
  <circle cx={cx} cy={cy} r={r} {...other} />
)

Circle.propTypes = {
  cx: number.isRequired,
  cy: number.isRequired,
  r: number.isRequired,
}

export default Circle
