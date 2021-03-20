import React from 'react'
import { number } from 'prop-types'

const Eight = ({ height, width }) => {
  const cx = width / 2
  const cy = height / 2

  return (
    <path
      d={[
        `M ${0}, ${cy}`,
        `${cx}, ${0}`,
        `${width}, ${cy}`,
        `${cx}, ${height} Z`,
      ]}
    />
  )
}

Eight.propTypes = {
  height: number,
  width: number,
}

export default Eight
