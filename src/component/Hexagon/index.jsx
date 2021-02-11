import React from 'react'
import { number } from 'prop-types'

const Hexagon = ({ cx, cy, r, rotation, precision, ...other }) => {
  const points = [...Array(6).keys()]
    .map((n, i) => {
      const deg = 60 * i - 30
      const rad = (Math.PI / 180) * deg
      return [
        +(r * Math.cos(rad) + cx).toFixed(precision),
        +(r * Math.sin(rad) + cy).toFixed(precision),
      ]
    })
    .map((p) => p.join(','))
    .join(' ')
  return (
    <polygon
      transform={rotation ? `rotate(${rotation} ${cx} ${cy})` : null}
      points={points}
      fill="none"
      stroke="#000"
      strokeWidth="1"
      {...other}
    />
  )
}

Hexagon.defaultProps = {
  precision: 2,
}

Hexagon.propTypes = {
  cx: number,
  cy: number,
  r: number,
  rotation: number,
  precision: number,
}

export default Hexagon
