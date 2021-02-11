import React from 'react'
import { number } from 'prop-types'

import Rect from '../../../component/Rect'

export const InsetOutline = ({ size, strokeWidth, inset }) => {
  const i = inset || strokeWidth * 0.5
  return (
    <Rect
      width={size - i * 2}
      height={size - i * 2}
      strokeWidth={strokeWidth}
      x={i}
      y={i}
    />
  )
}
InsetOutline.defaultProps = {
  inset: 10,
}
InsetOutline.propTypes = {
  size: number,
  strokeWidth: number,
  inset: number,
}

export default InsetOutline
