import React from 'react'
import { number } from 'prop-types'

const Line = ({ x1, y1, x2, y2, ...other }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} {...other} />
)

Line.propTypes = {
  x1: number.isRequired,
  y1: number.isRequired,
  x2: number.isRequired,
  y2: number.isRequired,
}

export default Line
