import React from 'react'
import { number } from 'prop-types'
// import { spline } from '@georgedoescode/spline'

import sample from '../../lib/sample'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polyline from '../../component/Polyline'

const jumpBoundaries = ({ pos, min, max }) => {
  let newPos
  if (pos < min) {
    newPos = pos + (max - min)
  } else if (pos > max) {
    newPos = pos - (max - min)
  } else {
    newPos = pos
  }
  return newPos
}

const getPoints = ({ width, height, x: initialX, y: initialY }) => {
  const groups = []
  const directionCount = 4
  const directions = [...Array(directionCount + 1).keys()].filter(Boolean)
  // const directions = [1, 1, 1, 1, 1, 2, 2, 2, 3, 4]

  const points = 14000
  const walkLength = 20
  // const walkLengthStep = walkLength / (points * 2)
  // let nextWalkLength = walkLength

  let group = 0
  let x = initialX
  let y = initialY
  let prevDirection

  for (let i = 0; i < points; i++) {
    const possibles = directions.filter((d) => d !== prevDirection)
    const nextDirection = sample(possibles)

    if (nextDirection === 1) {
      y += walkLength
      prevDirection = 3
    }
    if (nextDirection === 2) {
      x += walkLength
      prevDirection = 4
    }
    if (nextDirection === 3) {
      y -= walkLength
      prevDirection = 1
    }
    if (nextDirection === 4) {
      x -= walkLength
      prevDirection = 2
    }

    // nextWalkLength -= walkLengthStep

    const correctedX = jumpBoundaries({ pos: x, min: 0, max: width })
    const correctedY = jumpBoundaries({ pos: y, min: 0, max: height })

    if (x !== correctedX || y !== correctedY) {
      x = correctedX
      y = correctedY
      group++
    }

    if (!groups[group]) groups[group] = []
    groups[group].push([x, y])
    // prevDirection = nextDirection
  }

  return groups
  // return groups.map((group) => spline(group, 0.2))
}

const WalkForwards = ({ width, height }) => {
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
    // {
    //   color: 'pink',
    //   pointsGroups: getPoints({
    //     width,
    //     height,
    //     x: width * 0.75,
    //     y: height * 0.25,
    //   }),
    // },
    // {
    //   color: 'lightblue',
    //   pointsGroups: getPoints({
    //     width,
    //     height,
    //     x: width * 0.25,
    //     y: height * 0.75,
    //   }),
    // },
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
            <Polyline
              key={`polyline:${j}`}
              points={points}
              stroke={line.color || '#fff'}
              strokeWidth="2"
            />
            // <path
            //   d={points}
            //   key={`polyline:${j}`}
            //   stroke={line.color || '#fff'}
            //   strokeWidth="2"
            //   fill="transparent"
            // />
          ))}
        </Group>
      ))}
    </Svg>
  )
}

WalkForwards.defaultProps = {
  printWidth: 160,
  printHeight: 160,
}

WalkForwards.propTypes = {
  width: number,
  height: number,
}

export default WalkForwards
