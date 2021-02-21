import React from 'react'
import { number } from 'prop-types'

import sample from '../../lib/sample'
import loopAvailables from './lib/loop-availables'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polyline from '../../component/Polyline'

const getPoints = ({ cols, rows, width, height }) => {
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

  const groups = indexedGroups.filter(Boolean).map((indexedGroup, i) => {
    return indexedGroup.map((index) => {
      const x = (index % cols) * colSize
      const y = Math.floor(index / rows) * rowSize
      return [x, y]
    })
  })

  return groups
  // return [groups[0]]
}

const WalkFill = ({ width, height }) => {
  const lines = [
    {
      color: 'blue',
      pointsGroups: getPoints({
        cols: 10,
        rows: 10,
        width,
        height,
      }),
    },
    // {
    //   color: 'red',
    //   pointsGroups: getPoints({
    //     cols: 75,
    //     rows: 75,
    //     width,
    //     height,
    //   }),
    // },
  ]

  return (
    <Svg
      width={`${width}mm`}
      height={`${height}mm`}
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
              stroke={line.color || '#fff'}
              strokeWidth="0.5"
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
}

export default WalkFill
