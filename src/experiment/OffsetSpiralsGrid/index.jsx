import React from 'react'
import { arrayOf, bool, number, string } from 'prop-types'
import { spline } from '@georgedoescode/spline'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Spirals from '../../component/Spirals'

const OffsetSpiralsGrid = ({
  colors,
  containerWidth,
  containerHeight,
  maxRadius,
  minRadius,
  numPoints,
  offset,
  staggeredOffset,
  printWidth,
  printHeight,
  rotations,
  tension,
  gutter,
  ...other
}) => {
  const c = {
    x: containerWidth / 2,
    y: containerHeight / 2,
  }

  const spiralOffset = maxRadius + gutter
  const spiralOffsets = [
    [spiralOffset * -1, spiralOffset * -2],
    [spiralOffset, spiralOffset * -2],
    [spiralOffset * -1, 0],
    [spiralOffset, 0],
    [spiralOffset * -1, spiralOffset * 2],
    [spiralOffset, spiralOffset * 2],
  ]

  const spirals = [1, 2, 3, 4, 5, 6]

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
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${containerWidth} ${containerHeight}`}
    >
      <style>{(() => `path { mix-blend-mode: multiply; }`)()}</style>

      {spirals.map((spiral, s) => {
        return (
          <Group
            key={`spiral:${s}`}
            label={`${s + 1} Spiral`}
            transform={`translate(${spiralOffsets[s][0]}, ${spiralOffsets[s][1]})`}
          >
            <Spirals
              cx={c.x}
              cy={c.y}
              {...{
                colors,
                maxRadius,
                minRadius,
                numPoints,
                offset,
                staggeredOffset,
                rotations,
                tension,
              }}
            />
          </Group>
        )
      })}
    </Svg>
  )
}

OffsetSpiralsGrid.defaultProps = {
  colors: ['lime', 'yellow', 'cyan', 'magenta'],
  containerWidth: 180,
  containerHeight: 180,
  maxRadius: 90,
  minRadius: 0.5,
  numPoints: 20,
  offset: 0.2,
  printWidth: 180,
  printHeight: 180,
  rotations: 69,
  tension: 1,
  staggeredOffset: false,
  gutter: 10,
}

OffsetSpiralsGrid.propTypes = {
  colors: arrayOf(string),
  containerWidth: number,
  containerHeight: number,
  maxRadius: number,
  minRadius: number,
  numPoints: number,
  offset: number,
  printWidth: number,
  printHeight: number,
  rotations: number,
  tension: number,
  gutter: number,
  staggeredOffset: bool,
}

export default OffsetSpiralsGrid
