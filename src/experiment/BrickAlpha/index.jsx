import React from 'react'
import { number } from 'prop-types'

const BrickAlpha = ({ cx, cy, r, rotation, precision, ...other }) => {
  const points = [...Array(6).keys()]
    .map((n, i) => {
      const deg = 60 * i - 30
      const rad = (Math.PI / 180) * deg
      return [
        +(r * Math.cos(rad) + cx).toFixed(precision),
        +(r * Math.sin(rad) + cy).toFixed(precision),
      ]
    })
    .map((p) => p.join(','))
    .join(' ')
  return (
    <g>
      <polygon
        transform={rotation ? `rotate(${rotation} ${cx} ${cy})` : null}
        points={points}
        fill="none"
        stroke="lime"
        strokeWidth="3"
        {...other}
      />
      <polygon
        transform={rotation ? `rotate(${rotation} ${cx} ${cy})` : null}
        points={[
          [150, 180],
          [150, 300],
          [20, 225],
          [20, 105],
          [150, 180],
          [280, 105],
          [280, 225],
          [150, 300],
        ]
          .map((p) => p.join(','))
          .join(' ')}
        fill="none"
        stroke="#000"
        strokeWidth="1"
        {...other}
      />
      {[
        [-33, 0],
        [0, 66],
        [33, 0],
        [0, -66],
      ].map((stud, i) => {
        return (
          <g key={i} transform={`translate(${stud[1]}, ${stud[0]})`}>
            <ellipse
              cx="150"
              cy="85"
              rx={30}
              ry={30 * (45 / 90)}
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
            <path
              d={[
                `M${150 - 30},85`,
                `v20`,
                `a${30},${30 * (45 / 90)} 0,0,0 ${30 + 30},0`,
                `v-20`,
              ].join(' ')}
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
          </g>
        )
      })}
    </g>
  )
}

BrickAlpha.defaultProps = {
  precision: 2,
}

BrickAlpha.propTypes = {
  cx: number,
  cy: number,
  r: number,
  rotation: number,
  precision: number,
}

export default BrickAlpha
