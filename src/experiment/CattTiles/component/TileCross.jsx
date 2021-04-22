import React from 'react'
import { bool, number } from 'prop-types'
// import pythagoras from '../../../lib/pythagoras'
// import anglesFromSides from '../../../lib/triangle/angles-from-sides'

const getArcOffset = ({ i, lines, offset }) => {
  if (offset) {
    return (1 / lines) * (i + 0.5)
  }
  return (1 / (lines - 1)) * i
}

const TileCross = ({ x, y, w, h, rot, lines, offset, offsetJoin }) => {
  return (
    <g transform={`rotate(${rot}, ${x + w / 2}, ${y + h / 2})`}>
      {[...Array(Math.ceil((lines + 1) / 2)).keys()].map((i) => {
        const m = getArcOffset({ i, lines, offset })
        return (
          <path
            key={i}
            d={[
              `M ${x + w}, ${y + h * (1 - m)}`,
              `A ${h * m}, ${w * m} 0,0,0 ${x + w - w * m}, ${y + h}`,
            ]}
            stroke="green"
          />
        )
      })}
      {[...Array(Math.ceil((lines + 1) / 2)).keys()].map((i) => {
        const m = getArcOffset({ i, lines, offset })
        return (
          <path
            key={i}
            d={[
              `M ${x}, ${y + h - h * (1 - m)}`,
              `A ${h * m}, ${w * m} 0,0,0 ${x + w * m}, ${y}`,
            ]}
            stroke="red"
          />
        )
      })}
      {[...Array(Math.ceil(lines / 2)).keys()].map((i) => {
        const m = getArcOffset({ i, lines, offset })
        return (
          <path
            key={i}
            d={[
              `M ${x + w - w * (1 - m)}, ${y + h}`,
              `A ${h * m}, ${w * m} 0,0,0 ${x}, ${y + h - h * m}`,
            ]}
            stroke="blue"
          />
        )
      })}
      {[...Array(Math.ceil(lines / 2)).keys()].map((i) => {
        const m = getArcOffset({ i, lines, offset })
        return (
          <path
            key={i}
            d={[
              `M ${x + w * (1 - m)}, ${y}`,
              `A ${h * m}, ${w * m} 0,0,0 ${x + w}, ${y + h * m}`,
            ]}
            stroke="orange"
          />
        )
      })}
    </g>
  )
}

TileCross.propTypes = {
  x: number,
  y: number,
  w: number,
  h: number,
  rot: number,
  lines: number,
  offset: bool,
  offsetJoin: bool,
}

export default TileCross
