import React from 'react'
import { number } from 'prop-types'

import Polyline from '../../component/Polyline'
import Svg from '../../component/Svg'

const getLength = ({ i, lengths }) => {
  if (i % 16 === 0) return lengths[0]
  if (i % 8 === 0) return lengths[1]
  if (i % 4 === 0) return lengths[2]
  if (i % 2 === 0) return lengths[3]
  return lengths[4]
}

const LinesGrid = ({
  printWidth,
  printHeight,
  width,
  height,
  cols,
  rows,
  lengthOffset,
  xOffset,
  yOffset,
  angle,
  scale,
}) => {
  const colGap = width / cols
  const rowGap = height / rows
  const lengths = [...Array(5).keys()].map((i) => 1 - i * lengthOffset)

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
      strokeWidth={0.4}
    >
      <g
        transform={`translate(${xOffset}, ${yOffset}) rotate(${angle}, ${
          width / 2
        }, ${height / 2})`}
      >
        {[...Array(cols + 1).keys()].map((col) => {
          const points = [
            [colGap * col, height * (1 - getLength({ i: col, lengths }))],
            [colGap * col, height],
          ]
          return (
            <Polyline
              key={`col:${col}`}
              points={col % 2 === 0 ? points : points.reverse()}
            />
          )
        })}
        {[...Array(rows + 1).keys()].map((row) => {
          const points = [
            [width * (1 - getLength({ i: row, lengths })), rowGap * row],
            [width, rowGap * row],
          ]
          return (
            <Polyline
              key={`row:${row}`}
              points={row % 2 === 0 ? points : points.reverse()}
            />
          )
        })}
      </g>
    </Svg>
  )
}

LinesGrid.defaultProps = {
  printWidth: 200,
  printHeight: 200,
  width: 200,
  height: 200,
  rows: 320,
  cols: 320,
  lengthOffset: 0.15,
  xOffset: 0,
  yOffset: 0,
  angle: 30,
  scale: 1,
}

LinesGrid.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  rows: number,
  cols: number,
  lengthOffset: number,
  xOffset: number,
  yOffset: number,
  angle: number,
  scale: number,
}

export default LinesGrid
