import React from 'react'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import pythagoras from '../../lib/pythagoras'
import mapRange from '../../lib/map-range'
import randomSeeded from '../../lib/random-seeded'

import Line from '../Line'

const getLineOffset = ({ seed, min, max }) => {
  if (min === 1 && max === 1) return 1
  return mapRange({
    value: randomSeeded(seed),
    min1: 0,
    max1: 1,
    min2: min,
    max2: max,
  })
}

const getLinePoints = ({
  r,
  density,
  xOff,
  yOff,
  seed,
  lineMinOffset,
  lineMaxOffset,
}) => {
  const gap = (r * 2) / (density + 1)
  const linePoints = [...Array(density).keys()].map((i) => {
    const offset = (i + 1) * gap
    const length = offset === r ? r : pythagoras({ a: r - offset, c: r })
    const offsetLength =
      length *
      getLineOffset({
        seed: `${seed}:lineOffset:${i}`,
        min: lineMinOffset,
        max: lineMaxOffset,
      })
    console.log(length, offsetLength, length - offsetLength)
    return {
      x1: xOff + (r - offsetLength),
      y1: yOff + offset,
      x2: xOff + r + offsetLength,
      y2: yOff + offset,
    }
  })
  return linePoints
}

const HatchedCircle = ({
  cx,
  cy,
  r,
  r2,
  layers,
  rotation,
  strokeWidth,
  outline,

  lineMinOffset,
  lineMaxOffset,
  lineSkipChance,
  seed,
  ...other
}) => {
  const xOff = cx - r
  const yOff = cy - r
  return (
    <g transform={rotation && `rotate(${rotation}, ${cx}, ${cy})`}>
      {layers.map((layer, l) => (
        <g
          key={l}
          transform={`rotate(${(360 / layers.length) * l}, ${cx}, ${cy})`}
        >
          {getLinePoints({
            r,
            density: layer.density,
            xOff,
            yOff,
            seed,
            lineMinOffset,
            lineMaxOffset,
          }).map((coords, i) => {
            if (
              lineSkipChance &&
              randomSeeded(`${i}:${seed}:lineSkip`) < lineSkipChance
            )
              return null
            return (
              <Line
                key={i}
                {...(i % 2 === 0
                  ? coords
                  : {
                      x1: coords.x1,
                      y1: coords.y1,
                      x2: coords.x2,
                      y2: coords.y2,
                    })}
                stroke={layer.color}
                strokeWidth={strokeWidth}
              />
            )
          })}
        </g>
      ))}
      {outline && (
        <circle
          cx={cx}
          cy={cy}
          r={r2 || r}
          strokeWidth={strokeWidth}
          {...other}
        />
      )}
    </g>
  )
}

HatchedCircle.defaultProps = {
  layers: [{ density: 10, color: '#000' }],
  strokeWidth: 0.4,
  lineMinOffset: 1,
  lineMaxOffset: 1,
  lineSkipChance: 0,
  outline: true,
  seed: '',
}

HatchedCircle.propTypes = {
  cx: number.isRequired,
  cy: number.isRequired,
  r: number.isRequired,
  r2: number,
  layers: arrayOf(
    shape({
      density: number,
      color: string,
    })
  ),
  rotation: number,
  strokeWidth: number,
  lineMinOffset: number,
  lineMaxOffset: number,
  lineSkipChance: number,
  seed: string,
  outline: bool,
}

export default HatchedCircle
