import React from 'react'
import { number } from 'prop-types'

const Three = ({ height, width }) => {
  const cx = width / 2
  const cy = height / 2

  return (
    <>
      {[0, 180].map((deg) => (
        <path
          key={deg}
          d={[`M ${0}, ${cy}`, `${cx}, ${0}`]}
          transform={`rotate(${deg}, ${width / 2}, ${height / 2})`}
        />
      ))}
    </>
  )
}

Three.propTypes = {
  height: number,
  width: number,
}

export default Three
