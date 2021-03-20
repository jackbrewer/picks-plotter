import React from 'react'
import { number } from 'prop-types'

const Seven = ({ height, width }) => {
  const cx = width / 2
  const cy = height / 2

  return (
    <g>
      <circle cx={cx} cy={cy} r={cx} />
      <circle cx={cx} cy={height * 0.75} r={height * 0.25} />
    </g>
  )
}

Seven.propTypes = {
  height: number,
  width: number,
}

export default Seven
