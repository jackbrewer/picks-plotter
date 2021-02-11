import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'
import Safe from '../../component/Safe'

const Lines = ({ cols, rows }) => {
  const width = 420
  const height = 420
  const safe = 10
  const safeWidth = width - safe * 2
  const safeHeight = height - safe * 2

  const generatePoints = ({ col }) => {
    return [...Array(rows).keys()].map((row) => [
      Math.round(
        safe + ((safeWidth / (cols - 1)) * col + Math.random() * (col * 0.1))
      ),
      Math.round(safe + (safeHeight / (rows - 1)) * row),
    ])
  }

  const linePoints = [...Array(cols).keys()].map((col) => {
    const points = generatePoints({ col })
    return points
    // const even = []
    // const odd = []
    // points.map((col, i) => (i % 2 === 0 ? even.push(col) : odd.unshift(col)))
    // return [...even, ...odd]
  })

  // const starter = [
  //   [(width / cols) * col, (height / rows) * i],
  //   [(width / cols) * col, (height / rows) * i],
  // ]
  // const end = [
  //   [(width / cols) * col, (height / rows) * i],
  //   [(width / cols) * col, (height / rows) * i],
  // ]

  return (
    <Svg width={width} height={height}>
      <Safe width={width} height={height} safe={safe} />
      {linePoints.map((col, i) => (
        <polyline
          key={i}
          points={col.map(([x, y]) => `${x}, ${y}`).join(' ')}
          stroke="black"
          strokeWidth="0.5"
          fill="none"
        />
      ))}
    </Svg>
  )
}

Lines.propTypes = {
  cols: number,
  rows: number,
}

export default Lines
