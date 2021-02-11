import React from 'react'
import { number } from 'prop-types'

const Polygon = ({
  corners,
  rotationOffset,
  cx,
  cy,
  r,
  rotation,
  precision,
  ...other
}) => {
  const points = [...Array(corners).keys()]
    .map((n, i) => {
      const deg = (360 / corners) * i + rotationOffset
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

Polygon.defaultProps = {
  corners: 3,
  rotationOffset: 30,
  precision: 2,
}

Polygon.propTypes = {
  corners: number,
  rotationOffset: number,
  cx: number,
  cy: number,
  r: number,
  rotation: number,
  precision: number,
}

export default Polygon
