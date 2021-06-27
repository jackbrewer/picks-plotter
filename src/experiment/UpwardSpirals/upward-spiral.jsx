import React from 'react'
import { number } from 'prop-types'
import { spline } from '@georgedoescode/spline'

const UpwardSpirals = ({
  containerSize,
  maxRadius,
  minRadius,
  numPoints,
  printSize,
  rotations,
  tension,
  ...other
}) => {
  const center = {
    x: containerSize / 2,
    y: containerSize / 2,
  }

  const pointsCount = numPoints * rotations
  const angleStep = (Math.PI * 2) / numPoints

  const points = []
  for (let i = 1; i <= pointsCount; i++) {
    const positionOffset =
      ((maxRadius - minRadius) / pointsCount) * i + minRadius
    const x =
      center.x + Math.cos(i * angleStep * 1.001) * positionOffset + i * 0.03
    const y = center.y + Math.sin(i * angleStep) * positionOffset
    points.push({ x, y })
  }

  const pathData = spline(points, tension, false).split(',')
  // The first point in the spline is always a little off for some reason, so remove it
  pathData.splice(-2, 2)

  return (
    <svg
      width={`${printSize}mm`}
      height={`${printSize}mm`}
      viewBox={`0 0 ${containerSize} ${containerSize}`}
      fill="none"
      stroke="#000"
      strokeWidth="0.2"
    >
      <path d={pathData} {...other} />
    </svg>
  )
}

UpwardSpirals.defaultProps = {
  containerSize: 180,
  maxRadius: 45,
  minRadius: 25,
  numPoints: 30,
  printSize: 180,
  rotations: 75,
  tension: 1,
}

UpwardSpirals.propTypes = {
  containerSize: number,
  maxRadius: number,
  minRadius: number,
  numPoints: number,
  offset: number,
  printSize: number,
  rotations: number,
  tension: number,
}

export default UpwardSpirals
