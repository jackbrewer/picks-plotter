// https://wattenberger.com/blog/spirals

import React from 'react'
import { number, string } from 'prop-types'
// import { spline } from '@georgedoescode/spline'

import getSpiralPoints from '../../lib/get-spiral-points'
import randomSeeded from '../../lib/random-seeded'
import mapRange from '../../lib/map-range'
import HatchedCircle from '../../component/HatchedCircle'
import Svg from '../../component/Svg'

const getDensity = ({ seed, min, max }) => {
  return Math.round(
    mapRange({
      value: seed,
      min1: 0,
      max1: 1,
      min2: min,
      max2: max,
    })
  )
}

const CircleHatchSpiral = ({
  tension,
  minRadius,
  maxRadius,
  numPoints,
  pointRadius,
  angleDiff,
  distance,
  printWidth,
  printHeight,
  width,
  height,
  seed,
  ...other
}) => {
  const containerSize = Math.min(width, height)
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

  // const pathData = spline(points, tension, false)

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
      strokeWidth="0.4"
    >
      {points.map((point, i) => (
        <HatchedCircle
          key={`point${i}:${point.angle}`}
          cx={point.x}
          cy={point.y}
          r={10}
          rotation={mapRange({
            value: randomSeeded(`${i}:${seed}:rotation`),
            min1: 0,
            max1: 1,
            min2: 0,
            max2: 360,
          })}
          layers={[
            {
              density: getDensity({
                seed: randomSeeded(`${i}:${seed}:1`),
                min: 6,
                max: 20,
              }),
              color: 'yellow',
            },
            {
              density: getDensity({
                seed: randomSeeded(`${i}:${seed}:2`),
                min: 6,
                max: 20,
              }),
              color: 'magenta',
            },
            {
              density: getDensity({
                seed: randomSeeded(`${i}:${seed}:3`),
                min: 6,
                max: 20,
              }),
              color: 'cyan',
            },
          ]}
        />
      ))}
      {/* <path d={pathData} fill="none" stroke="#000" strokeWidth="1" {...other} /> */}
    </Svg>
  )
}

CircleHatchSpiral.defaultProps = {
  minRadius: 30,
  maxRadius: 150,
  tension: 1.23,
  numPoints: 200,
  pointRadius: 5,
  angleDiff: 3,
  distance: 1.5,
  seed: '',
}

CircleHatchSpiral.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  tension: number,
  minRadius: number,
  maxRadius: number,
  numPoints: number,
  pointRadius: number,
  angleDiff: number,
  distance: number,
  seed: string,
}

export default CircleHatchSpiral
