import React from 'react'
import { number } from 'prop-types'

import Polyline from '../../../component/Polyline'

const TileStraight = ({ x, y, w, h, rot, lines }) => (
  <g>
    {[...Array(lines).keys()].map((i) => {
      const points = []
      if (rot === 0 || rot === 180) {
        const yOff = y + (h / (lines - 1)) * i
        points.push([x, yOff])
        points.push([x + w, yOff])
      } else {
        const xOff = x + (w / (lines - 1)) * i
        points.push([xOff, y])
        points.push([xOff, y + h])
      }
      return (
        <Polyline
          key={`line:${i}`}
          points={i % 2 ? points : points.reverse()}
        />
      )
    })}
  </g>
)

TileStraight.propTypes = {
  x: number,
  y: number,
  w: number,
  h: number,
  rot: number,
  lines: number,
}

export default TileStraight
