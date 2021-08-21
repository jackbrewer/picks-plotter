import React from 'react'
import { number } from 'prop-types'

import Polygon from '../../../component/Polygon'

const Bow = ({ x, y, offX, offY, rot, width, height, ...other }) => {
  const points = [
    [offX + 0, offY + 0],
    [offX + width, offY + height],
    [offX + width, offY + 0],
    [offX + 0, offY + height],
  ]
  return (
    <g transform={`rotate(${rot + 90}, ${x}, ${y})`}>
      <Polygon points={points} {...other} />
    </g>
  )
}

Bow.propTypes = {
  x: number,
  y: number,
  offX: number,
  offY: number,
  rot: number,
  width: number,
  height: number,
}

export default Bow
