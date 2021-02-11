import React from 'react'
import { number } from 'prop-types'
import { spline } from '@georgedoescode/spline'

import randomInt from '../../lib/random-int'
import randomFloat from '../../lib/random-float'

const Blob = ({
  containerSize,
  sizeMin,
  sizeMax,
  numPoints,
  tension,
  pullLimits,
  ...other
}) => {
  const c = {
    x: (containerSize || sizeMax) / 2,
    y: (containerSize || sizeMax) / 2,
  }
  const size = randomInt(sizeMin / 2, sizeMax / 2)
  const angleStep = (Math.PI * 2) / numPoints
  const points = []
  for (let i = 1; i <= numPoints; i++) {
    const pull = randomFloat(pullLimits.min, pullLimits.max)
    const x = c.x + Math.cos(i * angleStep) * (size * pull)
    const y = c.y + Math.sin(i * angleStep) * (size * pull)
    points.push({ x, y })
  }
  const pathData = spline(points, tension, true)
  return (
    <path d={pathData} fill="none" stroke="#000" strokeWidth="1" {...other} />
  )
}

Blob.defaultProps = {
  numPoints: randomInt(5, 12),
  pullLimits: { min: 0.75, max: 1 },
}

Blob.propTypes = {
  containerSize: number,
  sizeMin: number,
  sizeMax: number,
  tension: number,
  numPoints: number,
  pullLimits: number,
}

export default Blob
