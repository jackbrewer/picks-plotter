import React from 'react'
import { number } from 'prop-types'

const Two = ({ height, width }) => {
  // const cx = width / 2
  const cy = height / 2

  return (
    <>
      {[0, 90].map((deg) => (
        <path
          key={deg}
          d={[`M ${0}, ${cy}`, `${width}, ${cy}`]}
          transform={`rotate(${deg}, ${width / 2}, ${height / 2})`}
        />
      ))}
    </>
  )
}

Two.propTypes = {
  height: number,
  width: number,
}

export default Two
