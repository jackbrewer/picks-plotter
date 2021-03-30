import React from 'react'
import { bool, number, string } from 'prop-types'

import sampleSeeded from '../../lib/sample-seeded'
import randomSeeded from '../../lib/random-seeded'

import colours from './colours.json'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polyline from '../../component/Polyline'
import Rect from '../../component/Rect'
import Line from '../../component/Line'

const generateRow = ({ rowIndex, cols, lines, seed, rowsPerColour }) => {
  const items = [...Array(cols).keys()].map((col) => {
    return [...Array(lines).keys()].map((line) => {
      return Math.round(randomSeeded(`${seed} ${rowIndex} ${col} ${line}`))
    })
  })
  return items.sort((a, b) => {
    const totalA = a.reduce((c, d) => c + d, 0)
    const totalB = b.reduce((c, d) => c + d, 0)
    return totalA < totalB ? -1 : 1
  })
}

const generateRows = ({ cols, rows, lines, seed }) => {
  return [...Array(rows).keys()].map((i) =>
    generateRow({ cols, lines, rowIndex: i, seed })
  )
}

const generateColours = ({ rows, seed }) => {
  return [...Array(rows).keys()].map((i) => {
    return [
      sampleSeeded({ arr: colours, seed: `${seed}${i}:1` }),
      sampleSeeded({ arr: colours, seed: `${seed}` }),
    ]
  })
}

const ColourGrid = ({
  cols,
  gap,
  grid,
  height,
  lines,
  printHeight,
  printWidth,
  rows,
  seed,
  width,
  alternateRotation,
  rotation,
  rowsPerColour,
}) => {
  const colWidth = width / cols
  const rowHeight = height / rows
  const gutter = gap / 2

  const rowItems = generateRows({ cols, rows, lines, seed })
  const rowColours = generateColours({ rows, seed })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <style>{(() => `path { mix-blend-mode: multiply; }`)()}</style>
      {[...Array(rows).keys()].map((row) => {
        const rowBits = rowItems[row]
        const colours = rowColours[Math.floor(row / rowsPerColour)]
        return (
          <Group
            label={`${row} ${colours[0].name} ${colours[1].name}`}
            key={row}
            transform={`translate(0, ${row * rowHeight})`}
          >
            {[...Array(cols).keys()].map((col) => {
              const bits = rowBits[col]
              return (
                <g key={col} transform={`translate(${col * colWidth}, 0)`}>
                  {[...Array(lines).keys()].map((line) => {
                    const x = ((colWidth - gap) / lines) * line
                    const rot = alternateRotation
                      ? line % 2
                        ? rotation
                        : rotation * -1
                      : rotation
                    const colour = colours[bits[line]].colour
                    const points = [
                      [x + gutter - rot, gutter],
                      [x + gutter + rot, rowHeight - gutter],
                    ]
                    return (
                      <Polyline
                        key={line}
                        points={line % 2 ? points : points.reverse()}
                        stroke={colour}
                        strokeOpacity={0.8}
                        // {...(rotation && {
                        //   transform: `rotate(${
                        //     line % 2 ? rotation : rotation * -1
                        //   }, ${x + gutter}, ${rowHeight / 2})`,
                        // })}
                      />
                    )
                  })}
                </g>
              )
            })}
          </Group>
        )
      })}
      {grid && (
        <Group label="Grid">
          <Rect width={width} height={height} strokeWidth="1mm" />
          {[...Array(cols).keys()].map((col, i) => (
            <Line
              key={i}
              x1={i * colWidth}
              y1={0}
              x2={i * colWidth}
              y2={height}
              strokeWidth="1mm"
            />
          ))}
          {[...Array(rows).keys()].map((row, i) => (
            <Line
              key={i}
              x1={0}
              y1={i * rowHeight}
              x2={width}
              y2={i * rowHeight}
              strokeWidth="1mm"
            />
          ))}
        </Group>
      )}
    </Svg>
  )
}

ColourGrid.defaultProps = {
  printWidth: 180,
  printHeight: 180,
  seed: '',
  lines: 10,
  gap: 2,
  rotation: 0,
  rowsPerColour: 1,
}

ColourGrid.propTypes = {
  width: number,
  height: number,
  cols: number,
  rows: number,
  printWidth: number,
  printHeight: number,
  seed: string,
  lines: number,
  gap: number,
  grid: bool,
  alternateRotation: bool,
  rotation: number,
  rowsPerColour: number,
}

export default ColourGrid
