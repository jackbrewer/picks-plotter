import React from 'react'
import { number } from 'prop-types'

const Donut = ({ cx, cy, r1, r2, ...other }) => (
  <path
    d={[
      // Outer circle
      `M ${cx - r1}, ${cy}`,
      `a ${r1}, ${r1} 0,1,0 ${r1 * 2}, 0`,
      `a ${r1}, ${r1} 0,1,0 ${r1 * -2}, 0 z`,
      // Inner circle
      `M ${cx - r2}, ${cy}`,
      `a ${r2}, ${r2} 0,1,1 ${r2 * 2}, 0`,
      `a ${r2}, ${r2} 0,1,1 ${r2 * -2}, 0 z`,
    ].join(' ')}
    fill="none"
    stroke="#000"
    strokeWidth="1"
    {...other}
  />
)

Donut.propTypes = {
  cx: number,
  cy: number,
  r1: number,
  r2: number,
}

export default Donut
