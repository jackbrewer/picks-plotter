import React from 'react'
import { bool, number } from 'prop-types'

import Svg from '../../component/Svg'
import Safe from '../../component/Safe'

const Lines2 = ({
  cols,
  rows,
  wobble,
  width,
  height,
  safe,
  fromCenter,
  fromRight,
}) => {
  const safeWidth = width - safe * 2
  const safeHeight = height - safe * 2

  const generateXArr = (col) => {
    const isEven = col % 2
    return [...Array(rows).keys()].map((row) => {
      const colWidth = safeWidth / (cols - 1)
      const center = safeWidth / 2 + safe

      const offset = (colWidth * col) / 2 + Math.random() * (col * wobble)

      if (fromCenter) {
        return isEven ? center + offset + colWidth / 2 : center - offset
      }
      if (fromRight) {
        return width - (safe + offset * 2)
      }
      return safe + offset * 2
    })
  }

  const generateYArr = () => {
    return [...Array(rows).keys()].map((row) =>
      Math.round(safe + (safeHeight / (rows - 1)) * row)
    )
  }

  const generateLine = (col) => {
    const xArr = generateXArr(col)
    const yArr = generateYArr()
    return yArr.map((y, i) => [xArr[i], y])
  }

  const generateLines = () => {
    return [...Array(cols).keys()].map((col) => generateLine(col))
  }

  return (
    <Svg width="160mm" height="80mm" viewBox={`0 0 ${width} ${height}`}>
      <Safe width={width} height={height} safe={safe} />
      {generateLines().map((col, i) => (
        <polyline
          key={i}
          points={col.map(([x, y]) => `${x}, ${y}`).join(' ')}
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </Svg>
  )
}

Lines2.defaultProps = {
  cols: 11,
  rows: 11,
  wobble: 0.1,
  width: 440,
  height: 440,
  safe: 20,
}

Lines2.propTypes = {
  cols: number,
  rows: number,
  wobble: number,
  width: number,
  height: number,
  safe: number,
  fromCenter: bool,
  fromRight: bool,
}

export default Lines2
