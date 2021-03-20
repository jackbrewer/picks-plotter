import React from 'react'
import { number } from 'prop-types'

const Five = ({ height, width }) => {
  const cx = width / 2
  const cy = height / 2

  return <circle cx={cx} cy={cy} r={cx} />
}

Five.propTypes = {
  height: number,
  width: number,
}

export default Five
