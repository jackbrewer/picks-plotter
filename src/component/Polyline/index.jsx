import React from 'react'
import { array, arrayOf } from 'prop-types'

const Polyline = ({ points, ...other }) => (
  <polyline
    points={points.map(([x, y]) => `${x}, ${y}`).join(' ')}
    fill="none"
    stroke="#000"
    strokeWidth="1"
    {...other}
  />
)

Polyline.propTypes = {
  points: arrayOf(array),
}

export default Polyline
