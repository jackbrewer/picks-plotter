import React from 'react'
import { arrayOf, bool, number, string } from 'prop-types'
import { spline } from '@georgedoescode/spline'

import Svg from '../../component/Svg'
import Group from '../../component/Group'

const OffsetSpirals = ({
  colors,
  containerSize,
  maxRadius,
  minRadius,
  numPoints,
  offset,
  staggeredOffset,
  printSize,
  rotations,
  tension,
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
  const pathData = spline(points, tension, false).split(',')
  pathData.splice(-2, 2).reverse()

  return (
    <Svg
      width={`${printSize}mm`}
      height={`${printSize}mm`}
      viewBox={`0 0 ${containerSize} ${containerSize}`}
    >
      <style>{(() => `path { mix-blend-mode: multiply; }`)()}</style>
      {colors.map((color, i) => (
        <Group
          key={`color:${i}`}
          label={`${i + 1} ${color}`}
          {...(!staggeredOffset && {
            transform: `rotate(${(360 / colors.length) * i + 1}, ${c.x}, ${
              c.y
            }) translate(0, ${offset * i})`,
          })}
          {...(staggeredOffset && {
            transform: `rotate(${(360 / colors.length) * i + 1}, ${c.x}, ${
              c.y
            }) translate(0, ${offset * (colors.length - i)})`,
          })}
        >
          <path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth="0.4"
            strokeOpacity="0.8"
            {...other}
            transform={`rotate(-90, ${c.x}, ${c.y})`}
          />
        </Group>
      ))}
    </Svg>
  )
}

OffsetSpirals.defaultProps = {
  colors: ['lime', 'yellow', 'cyan', 'magenta'],
  containerSize: 180,
  maxRadius: 90,
  minRadius: 0.5,
  numPoints: 20,
  offset: 0.2,
  printSize: 180,
  rotations: 69,
  tension: 1,
  staggeredOffset: false,
}

OffsetSpirals.propTypes = {
  colors: arrayOf(string),
  containerSize: number,
  maxRadius: number,
  minRadius: number,
  numPoints: number,
  offset: number,
  printSize: number,
  rotations: number,
  tension: number,
  staggeredOffset: bool,
}

export default OffsetSpirals
