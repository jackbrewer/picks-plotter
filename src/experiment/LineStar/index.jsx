import React from 'react'
import { number, string } from 'prop-types'

import randomBm from '../../lib/random-bm'
import randomSeeded from '../../lib/random-seeded'
import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'

const LineStar = ({
  count,
  seed,
  width,
  height,
  printWidth,
  printHeight,
  minRadius,
  maxRadius,
  x1Offset,
  x2Offset,
  randomMultiplier,
}) => {
  const c = { x: width / 2, y: height / 2 }
  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {[...Array(count).keys()].map((line) => (
        <line
          transform={`rotate(${(360 / count) * line},${c.x},${c.y})`}
          key={line}
          x1={c.x + x1Offset}
          y1={c.y - minRadius}
          // x2={c.x}
          // y2={c.y - r}
          // x2={c.x + (Math.random() - 0.5) * 100}
          // y2={c.y - r + Math.random() * 50}
          x2={c.x + x2Offset}
          y2={
            c.y -
            maxRadius +
            mapRange({
              value: randomSeeded(seed + line),
              min1: 0,
              max1: 1,
              min2: 0,
              max2: maxRadius - minRadius,
            }) *
              randomMultiplier
          }
          stroke="black"
          strokeWidth="0.4"
          // strokeDashoffset={`${Math.random() * -20}`}
          // strokeDasharray={[...Array(line).keys()].map((j) => j).join(' ')}
          // strokeDasharray={`${line * 0.1} ${line * 0.1}`}
          // strokeDasharray={`${[...Array(20).keys()].map(
          //   (i) => Math.random() * (20 - i)
          // )}`}
          // strokeDasharray={
          //   line % 2
          //     ? `${randomBm(10, 20, 2)} ${randomBm(5, 25, 1)}`
          //     : `${randomBm(15, 30, 2)} ${randomBm(5, 25, 1)}`
          // }
        />
      ))}
    </Svg>
  )
}

LineStar.propTypes = {
  count: number,
  seed: string,
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  minRadius: number,
  maxRadius: number,
  x1Offset: number,
  x2Offset: number,
  randomMultiplier: number,
}

export default LineStar
