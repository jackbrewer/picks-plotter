import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'
import Polyline from '../../component/Polyline'
import Group from '../../component/Group'

import cropPathToRect from '../RectCrop/lib/crop-path-to-rect'

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

const CMYKStitchesGrid = ({
  width,
  height,
  cols,
  rows,
  printWidth,
  printHeight,
  padding,
  scale,
  xOff,
  yOff,
}) => {
  const cells = cols * rows
  const w = (width - padding * 2) / cols
  const h = (height - padding * 2) / rows
  const s = scale
  const layers = ['yellow', 'magenta', 'cyan', 'black']
  // const layers = ['', '', '', 'black']
  const rotations = [22.5, 45, 67.5, 0]

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
                const points = getPoints({ w, h, i, cols, s, p: padding })
                return (
                  <g key={`${j} ${i}`}>
                    <Polyline
                      points={cropPathToRect({
                        points: points.horizontal,
                        clipPoints: [
                          [padding + width * 0, padding + height * 0],
                          [
                            padding + (width - padding * 2) * xOff,
                            padding + (height - padding * 2) * yOff,
                          ],
                        ],
                      })}
                      stroke={l}
                      strokeWidth={0.5}
                    />
                    <Polyline
                      points={cropPathToRect({
                        points: points.vertical,
                        clipPoints: [
                          [
                            padding + width * 0,
                            padding + (height - padding * 2) * yOff,
                          ],
                          [
                            padding + (width - padding * 2) * xOff,
                            padding + height * 1,
                          ],
                        ],
                      })}
                      stroke={l}
                      strokeWidth={0.5}
                    />
                    <Polyline
                      points={cropPathToRect({
                        points: points.horizontal,
                        clipPoints: [
                          [
                            padding + (width - padding * 2) * xOff,
                            padding + (height - padding * 2) * yOff,
                          ],
                          [padding + width * 1, padding + height * 1],
                        ],
                      })}
                      stroke={l}
                      strokeWidth={0.5}
                    />
                    <Polyline
                      points={cropPathToRect({
                        points: points.vertical,
                        clipPoints: [
                          [
                            padding + (width - padding * 2) * xOff,
                            padding + height * 0,
                          ],
                          [
                            padding + width * 1,
                            padding + (height - padding * 2) * yOff,
                          ],
                        ],
                      })}
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

CMYKStitchesGrid.defaultProps = {
  printWidth: 160,
  printHeight: 160,
  width: 160,
  height: 160,
  cols: 10,
  rows: 10,
  padding: 0,
  scale: 0.5,
  xOff: 0.5,
  yOff: 0.5,
}

CMYKStitchesGrid.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  cols: number,
  rows: number,
  padding: number,
  scale: number,
  xOff: number,
  yOff: number,
}

export default CMYKStitchesGrid
