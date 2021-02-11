import React from 'react'
import { number } from 'prop-types'

import Polyline from '../../../component/Polyline'

export const Corners = ({ size, strokeWidth, length, inset }) => {
  const i = inset || strokeWidth * 0.5
  const l = length
  const cornerPoints = [
    [
      [i, l + i],
      [i, i],
      [l + i, i],
    ],
    [
      [size - i - l, i],
      [size - i, i],
      [size - i, l + i],
    ],
    [
      [size - i, size - l - i],
      [size - i, size - i],
      [size - l - i, size - i],
    ],
    [
      [l + i, size - i],
      [i, size - i],
      [i, size - l - i],
    ],
  ]
  return cornerPoints.map((points, i) => (
    <Polyline key={i} points={points} strokeWidth={strokeWidth} />
  ))
}

Corners.defaultProps = {
  length: 10,
  inset: 30,
}

Corners.propTypes = {
  size: number,
  strokeWidth: number,
  length: number,
}

export default Corners
