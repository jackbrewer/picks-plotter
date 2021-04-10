import React from 'react'
import { number } from 'prop-types'

const RegularPolygon = ({ cx, cy, r, rotation, sides, ...other }) => {
  console.log({ sides, cx, cy, r, rotation, ...other })
  const precision = 5
  const points = [...Array(sides).keys()].map((i) => {
    const deg = (360 / sides) * i - 90 + rotation
    const rad = (Math.PI / 180) * deg
    return [
      +(r * Math.cos(rad) + cx).toFixed(precision),
      +(r * Math.sin(rad) + cy).toFixed(precision),
    ]
  })

  return <polygon points={points} {...other} />
}

RegularPolygon.defaultProps = {
  rotation: 0,
}

RegularPolygon.propTypes = {
  cx: number.isRequired,
  cy: number.isRequired,
  r: number.isRequired,
  rotation: number,
  sides: number.isRequired,
}

export default RegularPolygon
