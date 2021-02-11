import React from 'react'
import { number } from 'prop-types'

import Rect from '../Rect'

const Safe = ({ width, height, safe, ...other }) => (
  <>
    <Rect
      className="debug"
      x={safe}
      y={safe}
      width={width - safe * 2}
      height={height - safe * 2}
      opacity={0.25}
      {...other}
      fill="#fff"
    />
    <Rect
      className="debug"
      x={0}
      y={0}
      width={width}
      height={height}
      opacity={0.25}
    />
  </>
)

Safe.propTypes = {
  width: number,
  height: number,
  safe: number,
}

export default Safe
