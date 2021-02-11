import React from 'react'
import { number } from 'prop-types'

import randomBm from '../../lib/random-bm'

import Svg from '../../component/Svg'
import Safe from '../../component/Safe'

const safe = 10
const width = 500
const height = 500
const safeWidth = width - safe * 2
const safeHeight = height - safe * 2
const c = { x: width / 2, y: height / 2 }
const r = Math.min(safeWidth, safeHeight) / 2

const LineStar = ({ count }) => {
  return (
    <Svg width={width} height={width}>
      <Safe width={width} height={height} safe={safe} />
      {[...Array(count).keys()].map((line) => (
        <line
          key={line}
          x1={c.x}
          y1={c.y}
          // x2={c.x}
          // y2={c.y - r}
          x2={c.x + (Math.random() - 0.5) * 100}
          y2={c.y - r + Math.random() * 100}
          stroke="black"
          strokeWidth="1"
          strokeDashoffset={`${Math.random() * -20}`}
          // strokeDasharray={[...Array(line).keys()].map((i) => i).join(' ')}
          // strokeDasharray={`${[...Array(20).keys()].map(
          //   (i) => Math.random() * (20 - i)
          // )}`}
          strokeDasharray={
            line % 2
              ? `${randomBm(10, 20, 2)} ${randomBm(5, 25, 1)}`
              : `${randomBm(15, 30, 2)} ${randomBm(5, 25, 1)}`
          }
          transform={`rotate(${(360 / count) * line},${c.x},${c.y})`}
        />
      ))}
    </Svg>
  )
}

LineStar.propTypes = {
  count: number,
}

export default LineStar
