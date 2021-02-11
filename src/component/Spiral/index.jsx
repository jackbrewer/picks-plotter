import React from 'react'
import { number } from 'prop-types'
import { spline } from '@georgedoescode/spline'

const Spiral = ({
  containerSize,
  numPoints,
  tension,
  rotations,
  minRadius,
  maxRadius,
  // pullLimits,
  ...other
}) => {
  const c = {
    x: containerSize / 2,
    y: containerSize / 2,
  }
  const pointsCount = numPoints * rotations
  const angleStep = (Math.PI * 2) / numPoints
  const points = []
  for (let i = 1; i <= pointsCount; i++) {
    const positionOffset =
      ((maxRadius - minRadius) / pointsCount) * i + minRadius

    const x = c.x + Math.cos(i * angleStep) * positionOffset
    const y = c.y + Math.sin(i * angleStep) * positionOffset
    points.push({ x, y })
  }
  const pathData = spline(points, tension, false)
  return (
    <path
      d={pathData}
      fill="none"
      stroke="#000"
      strokeWidth="1"
      {...other}
      transform={`rotate(-90, ${c.x}, ${c.y})`}
    />
  )
}

Spiral.defaultProps = {
  numPoints: 20,
  rotations: 10,
  minRadius: 30,
  maxRadius: 150,
  containerSize: 300,
  tension: 1.23,
  // pullLimits: { min: 0.75, max: 1 },
}

Spiral.propTypes = {
  containerSize: number,
  tension: number,
  numPoints: number,
  rotations: number,
  minRadius: number,
  maxRadius: number,
}

export default Spiral
