import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'
import Polyline from '../../component/Polyline'
import Group from '../../component/Group'

const getPoints = ({ i, w, h, cols, s, p }) => {
  const col = i % cols
  const row = Math.floor(i / cols)
  const xOff = (w * (1 - s)) / 2
  const yOff = (h * (1 - s)) / 2
  const horizontal = [
    [p + col * w + xOff, p + row * h + yOff],
    [p + col * w + w - xOff, p + row * h + h - yOff],
  ]
  const vertical = [
    [p + col * w + w - xOff, p + row * h + yOff],
    [p + col * w + xOff, p + row * h + h - yOff],
  ]
  return { horizontal, vertical }
}

const CMYKStitches = ({
  width,
  height,
  cols,
  rows,
  printWidth,
  printHeight,
  padding,
  scale,
}) => {
  const cells = cols * rows
  const w = (width - padding * 2) / cols
  const h = (height - padding * 2) / rows
  const layers = ['yellow', 'magenta', 'cyan', 'black']
  const rotations = [90, 75, 105, 45]

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <style>
        {(() => `polyline { mix-blend-mode: multiply; opacity: 0.6 }`)()}
      </style>
      {layers.map((l, j) => {
        return (
          <Group key={j} label={`${j + 1} ${l}`}>
            <g
              transform={`rotate(${rotations[j]}, ${width / 2}, ${height / 2})`}
            >
              {[...Array(cells).keys()].map((i) => {
                const points = getPoints({
                  w,
                  h,
                  i,
                  cols,
                  s: scale,
                  p: padding,
                })
                return (
                  <g key={`${j} ${i}`}>
                    <Polyline
                      points={points.horizontal}
                      stroke={l}
                      strokeWidth={0.5}
                    />
                    <Polyline
                      points={points.vertical}
                      stroke={l}
                      strokeWidth={0.5}
                    />
                  </g>
                )
              })}
            </g>
          </Group>
        )
      })}
    </Svg>
  )
}

CMYKStitches.defaultProps = {
  printWidth: 160,
  printHeight: 160,
  width: 160,
  height: 160,
  cols: 10,
  rows: 10,
  padding: 0,
  scale: 0.5,
}

CMYKStitches.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  cols: number,
  rows: number,
  padding: number,
  scale: number,
}

export default CMYKStitches
