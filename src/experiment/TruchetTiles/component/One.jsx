import React from 'react'
import { number } from 'prop-types'

const One = ({ height, width }) => {
  const cx = width / 2
  const cy = height / 2

  return (
    <>
      {[0, 180].map((deg) => (
        <path
          key={deg}
          d={[`M ${0}, ${cx}`, `A ${cy}, ${cx} 0,0,1 ${cx}, ${height}`]}
          transform={`rotate(${deg}, ${width / 2}, ${height / 2})`}
        />
      ))}
    </>
  )
}

One.propTypes = {
  height: number,
  width: number,
}

export default One
