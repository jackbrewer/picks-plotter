import React from 'react'
import { bool, number } from 'prop-types'

// import Polygon from '../../../../component/Polygon'
import Polyline from '../../../../component/Polyline'

const Hexagon = ({
  cx,
  cy,
  r,
  r2,
  rotation,
  precision,
  lines,
  linesLength,
  ...other
}) => {
  const d = r * 2
  const points = [...Array(12).keys()].map((n, i) => {
    const deg = 30 * i - 30
    const rad = (Math.PI / 180) * deg
    const rAlt = i % 2 === 0 ? r : r * r2
    return [
      +(rAlt * Math.cos(rad) + cx).toFixed(precision),
      +(rAlt * Math.sin(rad) + cy).toFixed(precision),
    ]
  })

  console.log(points)

  const getStarts = () => {
    const x = points[0][0]
    const y = points[0][1]
    const length = points[2][1] - points[0][1]
    console.log(length)
    const segment = length / (7 - 1)

    return [...Array(7).keys()].map((i) => [x, y + i * segment])
  }

  const starts = getStarts()

  // console.log(getStarts())

  return (
    <g transform={rotation ? `rotate(${rotation} ${cx} ${cy})` : null}>
      {/* <Polygon
        points={points}
        fill="none"
        stroke="#000"
        strokeWidth="1"
        {...other}
      /> */}
      {[...Array(7).keys()].map((i) => {
        if (i % 2 === 0) return null
        return (
          <Polyline
            // transform={`rotate(${60 * i}, ${cx}, ${cy})`}
            key={i}
            points={[starts[i], points[12 - (i + 2)]]}
            {...other}
          />
        )
      })}
    </g>
  )
}

Hexagon.defaultProps = {
  precision: 2,
  linesLength: 1,
  r: 140,
  r2: 0.86666,
  cx: 140,
  cy: 140,
}

Hexagon.propTypes = {
  cx: number,
  cy: number,
  r: number,
  r2: number,
  rotation: number,
  precision: number,
  lines: bool,
  linesLength: number,
}

export default Hexagon
