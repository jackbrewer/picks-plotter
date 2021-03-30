import React from 'react'
import { number, string } from 'prop-types'

import getSpiralPoints from '../../lib/get-spiral-points'

import Svg from '../../component/Svg'

const DotSpiral = ({
  width,
  height,
  printWidth,
  printHeight,
  numPoints,
  pointRadius,
  angleDiff,
  distance,
  seed,
}) => {
  const c = { x: width / 2, y: height / 2 }
  const points = getSpiralPoints({
    numPoints,
    pointRadius,
    angleDiff,
    distance,
    cx: c.x,
    cy: c.y,
  })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {points.map((point, i) => (
        <circle
          key={`point${i}:${point.angle}`}
          cx={point.x}
          cy={point.y}
          // r={(0.5 / numPoints) * i}
          r={0.5}
          fill="transparent"
          stroke="black"
          strokeWidth="0.5"
          transform={`rotate(${(360 / numPoints) * i}, ${point.x}, ${point.y})`}
        />
      ))}
    </Svg>
  )
}

DotSpiral.defaultProps = {
  printWidth: 160,
  printHeight: 160,
  width: 160,
  height: 160,
  numPoints: 2000,
  pointRadius: 2,
  angleDiff: 3,
  distance: 1.5,
  seed: '',
}

DotSpiral.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  numPoints: number,
  pointRadius: number,
  angleDiff: number,
  distance: number,
  seed: string,
}

export default DotSpiral
