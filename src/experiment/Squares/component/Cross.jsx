import React from 'react'
import { number } from 'prop-types'

import Line from '../../../component/Line'

export const Cross = ({
  offsetX,
  offsetY,
  rotate,
  scale,
  size,
  strokeWidth,
}) => {
  const hs = size * 0.5
  const l = hs * scale

  return (
    <g
      transform={`translate(${size * offsetX}, ${
        size * offsetY
      }) rotate(${rotate}, ${hs}, ${hs})`}
    >
      <Line x1={hs} y1={hs - l} x2={hs} y2={hs + l} strokeWidth={strokeWidth} />
      <Line x1={hs - l} y1={hs} x2={hs + l} y2={hs} strokeWidth={strokeWidth} />
    </g>
  )
}
Cross.defaultProps = {
  offsetX: 0,
  offsetY: 0,
  rotate: 15,
  scale: 1,
}
Cross.propTypes = {
  offsetX: number,
  offsetY: number,
  rotate: number,
  scale: number,
  size: number,
  strokeWidth: number,
}

export default Cross
