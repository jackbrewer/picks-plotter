import React from 'react'
import { number } from 'prop-types'
import { spline } from '@georgedoescode/spline'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
// import Polyline from '../../component/Polyline'

const getPoints = ({ width, height, x: initialX, y: initialY }) => {
  const groups = []

  let group = 0
  let x = initialX
  let y = initialY

  for (let i = 0; i < 1000; i++) {
    if (Math.random() > 0.5) {
      x = x + (Math.random() - 0.5) * 300
      if (x < 0) {
        x = x + width
        group++
      }
      if (x > width) {
        x = x - width
        group++
      }
    } else {
      y = y + (Math.random() - 0.5) * 300
      if (y < 0) {
        y = y + height
        group++
      }
      if (y > height) {
        y = y - height
        group++
      }
    }

    if (!groups[group]) groups[group] = []
    groups[group].push([x, y])
  }

  return groups.map((group) => spline(group, 0.2))
}

const WalkTest = ({ width, height }) => {
  const lines = [
    {
      color: 'violet',
      pointsGroups: getPoints({
        width,
        height,
        x: width * 0.25,
        y: height * 0.25,
      }),
    },
    {
      color: 'pink',
      pointsGroups: getPoints({
        width,
        height,
        x: width * 0.75,
        y: height * 0.25,
      }),
    },
    {
      color: 'lightblue',
      pointsGroups: getPoints({
        width,
        height,
        x: width * 0.25,
        y: height * 0.75,
      }),
    },
    {
      color: 'turquoise',
      pointsGroups: getPoints({
        width,
        height,
        x: width * 0.75,
        y: height * 0.75,
      }),
    },
  ]

  // const smoothPoints = spline(points, 1)

  return (
    <Svg
      width={`${width / 10}mm`}
      height={`${height / 10}mm`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ background: '#222' }}
    >
      {lines.map((line, i) => (
        <Group key={`line:${i}`} label={line.color}>
          {line.pointsGroups.map((points, j) => (
            // <Polyline
            //   key={`polyline:${j}`}
            //   points={points}
            //   stroke={line.color || '#fff'}
            //   strokeWidth="2"
            // />
            <path
              d={points}
              key={`polyline:${j}`}
              stroke={line.color || '#fff'}
              strokeWidth="2"
              fill="transparent"
            />
          ))}
        </Group>
      ))}
    </Svg>
  )
}

WalkTest.defaultProps = {
  printWidth: 160,
  printHeight: 160,
}

WalkTest.propTypes = {
  width: number,
  height: number,
}

export default WalkTest
