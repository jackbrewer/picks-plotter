import React from 'react'
import { bool, number } from 'prop-types'

import Polygon from '../../../../component/Polygon'
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

  return (
    <>
      <Polygon
        transform={rotation ? `rotate(${rotation} ${cx} ${cy})` : null}
        points={points}
        fill="none"
        stroke="#000"
        strokeWidth="1"
        {...other}
      />
      {lines &&
        [1, 2, 3].map((i) => (
          <Polyline
            transform={`rotate(${60 * i}, ${cx}, ${cy})`}
            key={i}
            points={[
              [cx, d * (1 - linesLength)],
              [cx, d * linesLength],
            ]}
            {...other}
          />
        ))}
    </>
  )
}

Hexagon.defaultProps = {
  precision: 2,
  linesLength: 1,
  r: 140,
  r2: 0.4,
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
