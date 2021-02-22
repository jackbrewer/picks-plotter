import React from 'react'
import { number } from 'prop-types'

import loopAvailables from '../WalkFill/lib/loop-availables'
import sample from '../../lib/sample'

import Polyline from '../../component/Polyline'

const Spiral = ({
  containerSize,
  numPoints,
  rotations,
  minRadius,
  maxRadius,
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
    points.push([x, y])
  }

  const availables = [...points.keys()]

  const indexedGroups = loopAvailables({
    availables,
    current: sample(availables),
    rows: rotations,
    cols: numPoints,
    groups: [],
    group: 0,
  })

  const groups = indexedGroups.filter(Boolean).map((indexedGroup) => {
    return indexedGroup.map((index) => points[index])
  })

  return (
    <g>
      {groups.map((points, j) => (
        <Polyline
          key={`polyline:${j}`}
          points={points}
          stroke="#000"
          strokeWidth="0.2"
          strokeOpacity="0.8"
          transform={`rotate(-90, ${c.x}, ${c.y})`}
          {...other}
        />
      ))}
    </g>
  )
}

Spiral.defaultProps = {
  numPoints: 500,
  rotations: 40,
  minRadius: 40,
  maxRadius: 80,
  containerSize: 160,
}

Spiral.propTypes = {
  containerSize: number,
  numPoints: number,
  rotations: number,
  minRadius: number,
  maxRadius: number,
}

export default Spiral
