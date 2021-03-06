import React from 'react'
import { bool, arrayOf, number, string } from 'prop-types'

import sample from '../../lib/sample'
import pythagoras from '../../lib/pythagoras'
import loopAvailables from '../WalkFill/lib/loop-availables'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polyline from '../../component/Polyline'

const getPoints = ({ cols, rows, width, height, colours }) => {
  const colSize = width / (cols - 1)
  const rowSize = height / (rows - 1)
  const availables = [...Array(cols * rows).keys()]

  const indexedGroups = loopAvailables({
    availables,
    current: sample(availables),
    rows,
    cols,
    groups: [],
    group: 0,
  })

  const size = Math.min(width, height)
  const c = size / 2

  const groups = indexedGroups.filter(Boolean).map((indexedGroup) => {
    let cropped = false
    const mappedGroup = indexedGroup.map((index) => {
      const x = (index % cols) * colSize
      const y = Math.floor(index / cols) * rowSize

      const h = pythagoras({ a: c - x, b: c - y })
      if (h > c) {
        cropped = true
        return null // Don't return this point, as it's outside the circle
      }
      return [x, y]
    })

    // TODO: First try removing the lines that have crops in from the final pic, then worry about adding the split versions back in
    // This does it, but it shouldn't be done by passing a placeholder array, but by better type validation elsewhere
    if (cropped) {
      return [[0, 0]]
    }

    if (cropped) {
      return [[0, 0]]
      if (mappedGroup.filter(Boolean).length === 0) return [[0, 0]]

      // let splits = mappedGroup.filter((a) => !Boolean(a)).length
      let group = 0
      const subGroups = []

      let j = 0

      while (j < mappedGroup.length) {
        if (!subGroups[group]) subGroups[group] = []
        if (mappedGroup[j].length) {
          subGroups[group].push(mappedGroup[j])
        } else {
          if (subGroups[group].length > 0) group++
        }
        j++
      }

      // return subGroups.filter(Boolean)
      // console.log(subGroups.filter((g) => g.length))
      // return mappedGroup.push(...subGroups)
      console.log(mappedGroup.length)
      // subGroups.map((g) => mappedGroup.push(g))
      console.log(mappedGroup.length)
    }

    return mappedGroup.filter(Boolean)
  })

  return groups
}

const WalkFillCrop = ({
  width,
  height,
  cols,
  rows,
  printWidth,
  printHeight,
  colours,
  shadow,
}) => {
  const lines = [
    {
      color: 'blue',
      pointsGroups: getPoints({
        cols,
        rows,
        width,
        height,
      }),
    },
    // {
    //   color: 'red',
    //   pointsGroups: getPoints({
    //     cols: 51,
    //     rows: 51,
    //     width,
    //     height,
    //   }),
    // },
  ]

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
      // style={{ background: '#222' }}
    >
      <style>{(() => `path { mix-blend-mode: multiply; }`)()}</style>

      {shadow &&
        lines.map((line, i) => (
          <Group key={`line:${i + 100}`} label={`${line.color} shadow`}>
            {line.pointsGroups.map((points, j) => (
              <Polyline
                key={`polyline:${j}`}
                points={points.map((point) => {
                  const xOff = point[0] * 0.002 + width * 0.001
                  const yOff = point[1] * 0.003 + height * 0.002
                  return [point[0] + xOff, point[1] + yOff]
                })}
                stroke="#000"
                strokeWidth="0.2"
                strokeOpacity="0.8"
              />
            ))}
          </Group>
        ))}

      {lines.map((line, i) => (
        <Group key={`line:${i}`} label={line.color}>
          {line.pointsGroups.map((points, j) => {
            return (
              <Polyline
                key={`polyline:${j}`}
                points={points}
                stroke={
                  (colours && colours[j % colours.length]) ||
                  line.color ||
                  '#fff'
                }
                strokeWidth="0.2"
                strokeOpacity="0.8"
              />
            )
          })}
        </Group>
      ))}
    </Svg>
  )
}

WalkFillCrop.defaultProps = {
  printWidth: 160,
  printHeight: 160,
}

WalkFillCrop.propTypes = {
  width: number,
  height: number,
  cols: number,
  rows: number,
  printWidth: number,
  printHeight: number,
  colours: arrayOf(string),
  shadow: bool,
}

export default WalkFillCrop
