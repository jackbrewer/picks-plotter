import React from 'react'
import { number } from 'prop-types'

const Six = ({ height, width }) => {
  const cx = width / 2
  const cy = height / 2

  return (
    <g>
      <path d={[`M ${0}, ${cy}`, `${cx}, ${cy}`, `${cx}, ${0}`]} />
      <path d={[`M ${cx}, ${cy}`, `${width}, ${cy}`]} />
      <circle cx={cx} cy={height * 0.75} r={height * 0.25} />
    </g>
  )
}

Six.propTypes = {
  height: number,
  width: number,
}

export default Six
