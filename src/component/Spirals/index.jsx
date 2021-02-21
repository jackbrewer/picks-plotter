import React from 'react'
import { arrayOf, bool, number, string } from 'prop-types'
import { spline } from '@georgedoescode/spline'

import Group from '../../component/Group'

const Spirals = ({
  colors,
  maxRadius,
  minRadius,
  numPoints,
  offset,
  staggeredOffset,
  rotations,
  tension,
  cx,
  cy,
  strokeWidths,
  ...other
}) => {
  const c = {
    x: cx || maxRadius,
    y: cy || maxRadius,
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
    <g>
      {colors.map((color, i) => (
        <Group
          key={`color:${i}`}
          label={`${i + 1} ${color}`}
          {...(!staggeredOffset && {
            transform: `rotate(${(360 / colors.length) * i + 1}, ${c.x}, ${
              c.y
            }) translate(0, ${offset})`,
          })}
          {...(staggeredOffset && {
            transform: `rotate(${(360 / colors.length) * i + 1}, ${c.x}, ${
              c.y
            }) translate(0, ${offset * (colors.length - i)})`,
          })}
        >
          <style>{(() => `path { mix-blend-mode: multiply; }`)()}</style>
          <path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidths.length ? strokeWidths[i] : 0.4}
            strokeOpacity="0.8"
            {...other}
            transform={`rotate(-90, ${cx}, ${cy})`}
          />
        </Group>
      ))}
    </g>
  )
}

Spirals.defaultProps = {
  colors: ['yellow', 'magenta', 'cyan', 'black'],
  maxRadius: 90,
  minRadius: 0.5,
  numPoints: 20,
  offset: 0.2,
  rotations: 69,
  tension: 1,
  staggeredOffset: false,
  strokeWidths: [],
}

Spirals.propTypes = {
  colors: arrayOf(string),
  maxRadius: number,
  minRadius: number,
  numPoints: number,
  offset: number,
  rotations: number,
  tension: number,
  staggeredOffset: bool,
  cx: number,
  cy: number,
  strokeWidths: arrayOf(number),
}

export default Spirals
