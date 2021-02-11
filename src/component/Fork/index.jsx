import React from 'react'
import { bool, number } from 'prop-types'

const Fork = ({ x1, y1, length, split, angle, triple, ...other }) => {
  const start = { x: x1, y: y1 }
  const cut = { x: x1, y: y1 - length * split }
  const end = { x: x1, y: y1 - length }
  const angles = [angle, angle * -1]
  if (triple) angles.push(0)

  return (
    <g>
      <line
        x1={start.x}
        y1={start.y}
        x2={cut.x}
        y2={cut.y}
        fill="none"
        stroke="#000"
        strokeWidth="1"
        {...other}
      />
      {angles.map((a) => (
        <line
          key={a}
          x1={cut.x}
          y1={cut.y}
          x2={end.x}
          y2={end.y}
          transform={`rotate(${a} ${cut.x} ${cut.y})`}
          fill="none"
          stroke="#000"
          strokeWidth="1"
          {...other}
        />
      ))}
    </g>
  )
}

Fork.defaultProps = {
  angle: 60,
  split: 0.75,
}

Fork.propTypes = {
  angle: number,
  x1: number,
  y1: number,
  length: number,
  split: number,
  triple: bool,
}

export default Fork
