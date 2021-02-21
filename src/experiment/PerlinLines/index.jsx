import React from 'react'
import { number } from 'prop-types'
import { noise } from '@chriscourses/perlin-noise'

import Svg from '../../component/Svg'
// import Safe from '../../component/Safe'

const PerlinLines = ({
  cols,
  rows,
  width,
  height,
  printWidth,
  printHeight,
  seed,
  safe,
}) => {
  const safeWidth = width - safe * 2
  const safeHeight = height - safe * 2

  const generatePoints = ({ row }) => {
    return [...Array(cols).keys()].map((col) => {
      const noiseOffset = noise((col + seed) / 300, (row + seed) / 300)
      return [
        safe + (safeWidth / (cols - 1)) * col,
        safe +
          ((safeHeight / (rows - 1)) * row +
            (noiseOffset - 0.5) * ((rows - row) * 4)),
      ]
    })
  }

  const linePoints = [...Array(rows).keys()].map((row) => {
    const points = generatePoints({ row })
    return points
  })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* <Safe width={width} height={height} safe={safe} /> */}
      {linePoints.map((row, i) => (
        <polyline
          key={i}
          points={row.map(([x, y]) => `${x}, ${y}`).join(' ')}
          stroke="black"
          strokeWidth="0.4"
          fill="none"
        />
      ))}
    </Svg>
  )
}
PerlinLines.defaultProps = {
  seed: 0,
}

PerlinLines.propTypes = {
  cols: number,
  rows: number,
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  safe: number,
  seed: number,
}

export default PerlinLines
