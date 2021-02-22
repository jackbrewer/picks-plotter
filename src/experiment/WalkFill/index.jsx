import React from 'react'
import { arrayOf, number, string } from 'prop-types'

import sample from '../../lib/sample'
import loopAvailables from './lib/loop-availables'

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

  const groups = indexedGroups.filter(Boolean).map((indexedGroup) => {
    return indexedGroup.map((index) => {
      const x = (index % cols) * colSize
      const y = Math.floor(index / cols) * rowSize
      return [x, y]
    })
  })

  return groups
  // return [groups[0]]
}

const WalkFill = ({
  width,
  height,
  cols,
  rows,
  printWidth,
  printHeight,
  colours,
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
      {lines.map((line, i) => (
        <Group key={`line:${i}`} label={line.color}>
          {line.pointsGroups.map((points, j) => (
            <Polyline
              key={`polyline:${j}`}
              points={points}
              stroke={
                (colours && colours[j % colours.length]) || line.color || '#fff'
              }
              strokeWidth="0.2"
              strokeOpacity="0.8"
            />
          ))}
        </Group>
      ))}
    </Svg>
  )
}

WalkFill.defaultProps = {
  printWidth: 160,
  printHeight: 160,
}

WalkFill.propTypes = {
  width: number,
  height: number,
  cols: number,
  rows: number,
  printWidth: number,
  printHeight: number,
  colours: arrayOf(string),
}

export default WalkFill
