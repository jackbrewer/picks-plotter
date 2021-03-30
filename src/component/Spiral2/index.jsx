// https://wattenberger.com/blog/spirals

import React from 'react'
import { number } from 'prop-types'
import { spline } from '@georgedoescode/spline'

import getSpiralPoints from '../../lib/get-spiral-points'

const Spiral2 = ({
  containerSize,
  tension,
  minRadius,
  maxRadius,
  numPoints,
  pointRadius,
  angleDiff,
  distance,
  ...other
}) => {
  const c = {
    x: containerSize / 2,
    y: containerSize / 2,
  }

  const points = getSpiralPoints({
    numPoints,
    pointRadius,
    angleDiff,
    distance,
    cx: c.x,
    cy: c.y,
  })

  const pathData = spline(points, tension, false)

  return (
    <>
      {points.map((point, i) => (
        <circle
          key={`point${i}:${point.angle}`}
          cx={point.x}
          cy={point.y}
          r={3}
          fill="red"
        />
      ))}
      <path d={pathData} fill="none" stroke="#000" strokeWidth="1" {...other} />
    </>
  )
}

Spiral2.defaultProps = {
  minRadius: 30,
  maxRadius: 150,
  containerSize: 300,
  tension: 1.23,
  numPoints: 200,
  pointRadius: 5,
  angleDiff: 3,
  distance: 1.5,
}

Spiral2.propTypes = {
  containerSize: number,
  tension: number,
  minRadius: number,
  maxRadius: number,
  numPoints: number,
  pointRadius: number,
  angleDiff: number,
  distance: number,
}

export default Spiral2
