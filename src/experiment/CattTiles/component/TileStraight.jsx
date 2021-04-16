import React from 'react'
import { bool, number } from 'prop-types'

import Polyline from '../../../component/Polyline'

// TODO:
// optimisations - don't calc position every loop, just calc distance between lines and initial offset on render, then use multiples of that during loop

const getYOff = ({ y, h, lines, i, offset }) => {
  if (offset) {
    return y + (h / lines) * (i + 0.5)
  }
  return y + (h / (lines - 1)) * i
}
const getXOff = ({ x, w, lines, i, offset }) => {
  if (offset) {
    return x + (w / lines) * (i + 0.5)
  }
  return x + (w / (lines - 1)) * i
}

const TileStraight = ({ x, y, w, h, rot, lines, offset, offsetJoin }) => {
  return (
    <g>
      {[...Array(lines).keys()].map((i) => {
        const points = []
        if (rot === 0 || rot === 180) {
          const yOff = getYOff({ y, h, lines, i, offset })
          points.push([x, yOff])
          points.push([x + w, yOff])
        } else {
          const xOff = getXOff({ x, w, lines, i, offset })
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
      {offsetJoin &&
        [...Array(lines).keys()].map((i) => {
          const points = []
          if (rot === 0 || rot === 180) {
            const xOff = getXOff({ x, w, lines, i, offset })
            points.push([xOff, y])
            points.push([xOff, y + (h / lines) * 0.5])
          } else {
            const yOff = getYOff({ y, h, lines, i, offset })
            points.push([x, yOff])
            points.push([x + (w / lines) * 0.5, yOff])
          }
          return (
            <Polyline
              key={`line:${i}`}
              points={i % 2 ? points : points.reverse()}
            />
          )
        })}
      {offsetJoin &&
        [...Array(lines).keys()].map((i) => {
          const points = []
          if (rot === 0 || rot === 180) {
            const xOff = getXOff({ x, w, lines, i, offset })
            points.push([xOff, y + h])
            points.push([xOff, y + h - (h / lines) * 0.5])
          } else {
            const yOff = getYOff({ y, h, lines, i, offset })
            points.push([x + w, yOff])
            points.push([x + w - (w / lines) * 0.5, yOff])
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
}

TileStraight.propTypes = {
  x: number,
  y: number,
  w: number,
  h: number,
  rot: number,
  lines: number,
  offset: bool,
  offsetJoin: bool,
}

export default TileStraight
