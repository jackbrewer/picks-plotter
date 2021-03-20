import React from 'react'
import { number } from 'prop-types'

const Four = ({ height, width }) => {
  const cx = width / 2
  const cy = height / 2

  return (
    <>
      {[0, 180].map((deg) => (
        <g key={deg}>
          <path
            d={[
              `M ${0}, ${cy}`,
              `L ${cx * 0.25}, ${cy}`,
              `A ${cx * 0.75} ${cy * 0.75} 0 0,1 ${cx}, ${cy * 0.25}`,
              `L ${cx}, ${0}`,
            ].join(' ')}
            transform={`rotate(${deg}, ${width / 2}, ${height / 2})`}
          />
        </g>
      ))}
    </>
  )
}

Four.propTypes = {
  height: number,
  width: number,
}

export default Four
