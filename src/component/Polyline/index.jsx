import React from 'react'
import { array, arrayOf } from 'prop-types'

const Polyline = ({ points, ...other }) => {
  return <polyline points={points} {...other} />
}

Polyline.propTypes = {
  points: arrayOf(array).isRequired,
}

export default Polyline
