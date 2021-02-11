import React from 'react'
import { number } from 'prop-types'
import { spline } from '@georgedoescode/spline'

import randomInt from '../../lib/random-int'
import randomFloat from '../../lib/random-float'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Rect from '../../component/Rect'
import Circle from '../../component/Circle'

// https://dev.to/georgedoescode/tutorial-generative-blob-characters-using-svg-1igg

const BlobFace = ({ width, height, printWidth, printHeight }) => {
  const c = { x: width / 2, y: height / 2 }
  const size = randomInt(70, 90)

  // Body
  const numPoints = randomInt(3, 12)
  const angleStep = (Math.PI * 2) / numPoints
  const points = []
  for (let i = 1; i <= numPoints; i++) {
    const pull = randomFloat(0.75, 1)
    const x = c.x + Math.cos(i * angleStep) * (size * pull)
    const y = c.y + Math.sin(i * angleStep) * (size * pull)
    points.push({ x, y })
  }
  const pathData = spline(points, 1, true)

  // Eyes
  const maxWidth = size * 0.25
  const eyeSize = randomInt(maxWidth * 0.5, maxWidth * 0.8)
  const eyeRotation = (Math.random() - 0.5) * 10

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Group label="body">
        <path d={pathData} stroke="#000" fill="none" strokeWidth="1" />
      </Group>
      <Group label="eyes">
        <g transform={`rotate(${eyeRotation}, ${c.x}, ${c.y})`}>
          <Circle
            cx={c.x - maxWidth * 0.9}
            cy={c.y - maxWidth * 0.5}
            r={eyeSize}
          />
          <Circle
            cx={c.x - maxWidth * 0.9}
            cy={c.y - maxWidth * 0.4}
            r={eyeSize * 0.5}
          />
          <Circle
            cx={c.x + maxWidth * 0.9}
            cy={c.y - maxWidth * 0.5}
            r={eyeSize}
          />
          <Circle
            cx={c.x + maxWidth * 0.9}
            cy={c.y - maxWidth * 0.4}
            r={eyeSize * 0.5}
          />
        </g>
      </Group>
      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

BlobFace.defaultProps = {
  printWidth: 80,
  printHeight: 80,
  width: 200,
  height: 200,
}

BlobFace.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
}

export default BlobFace
