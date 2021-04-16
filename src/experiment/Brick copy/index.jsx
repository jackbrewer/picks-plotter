import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'
import Polyline from '../../component/Polyline'

const Brick = ({ printWidth, printHeight, width, height, scale }) => {
  const unit = 1.6 * scale
  const brick = {
    w: 5 * unit,
    h: 6 * unit,
    stud: {
      inset: 1 * unit,
      d: 3 * unit,
      r: 1.5 * unit,
      h: 1 * unit,
    },
  }
  const isoStud = {
    cx: (Math.sqrt(3) * brick.w) / 2,
    cy: brick.w * 0.5,
    rx: Math.sqrt(1.5) * brick.stud.r,
    ry: Math.sqrt(0.5) * brick.stud.r,
  }

  const p = {
    v: {
      l: [
        [0, brick.w * 0.5],
        [0, brick.w * 0.5 + brick.h],
      ],
      c: [
        [(Math.sqrt(3) * brick.w) / 2, brick.w],
        [(Math.sqrt(3) * brick.w) / 2, brick.w + brick.h],
      ],
      r: [
        [Math.sqrt(3) * brick.w, brick.w * 0.5],
        [Math.sqrt(3) * brick.w, brick.w * 0.5 + brick.h],
      ],
    },
    h: {
      lu: [
        [0, brick.w * 0.5],
        [(Math.sqrt(3) * brick.w) / 2, 0],
      ],
      ru: [
        [(Math.sqrt(3) * brick.w) / 2, 0],
        [Math.sqrt(3) * brick.w, brick.w * 0.5],
      ],
      lt: [
        [0, brick.w * 0.5],
        [(Math.sqrt(3) * brick.w) / 2, brick.w],
      ],
      rt: [
        [(Math.sqrt(3) * brick.w) / 2, brick.w],
        [Math.sqrt(3) * brick.w, brick.w * 0.5],
      ],
      lb: [
        [0, brick.w * 0.5 + brick.h],
        [(Math.sqrt(3) * brick.w) / 2, brick.w + brick.h],
      ],
      rb: [
        [(Math.sqrt(3) * brick.w) / 2, brick.w + brick.h],
        [Math.sqrt(3) * brick.w, brick.w * 0.5 + brick.h],
      ],
    },
  }

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {/* Block */}
      {[
        p.v.l,
        p.v.c,
        p.v.r,
        p.h.lu,
        p.h.ru,
        p.h.lt,
        p.h.rt,
        p.h.lb,
        p.h.rb,
      ].map((points, i) => (
        <Polyline key={`v:${i}`} points={points} />
      ))}

      {/* Stud */}
      <g>
        {/* <Polyline
          points={[
            [
              isoStud.cx - Math.sqrt(1.5) * brick.stud.r,
              isoStud.cy - brick.stud.h,
              isoStud.cx - Math.sqrt(1.5) * brick.stud.r,
              isoStud.cy,
            ],
          ]}
        />
        <Polyline
          points={[
            [
              isoStud.cx + isoStud.rx,
              isoStud.cy - brick.stud.h,
              isoStud.cx + isoStud.rx,
              isoStud.cy,
            ],
          ]}
        /> */}
        <ellipse
          cx={isoStud.cx}
          cy={isoStud.cy - brick.stud.h}
          rx={isoStud.rx}
          ry={isoStud.ry}
        />
        {/* <ellipse
          cx={isoStud.cx}
          cy={isoStud.cy}
          rx={isoStud.rx}
          ry={isoStud.ry}
          stroke="red"
        /> */}
        <path
          d={[
            `M ${isoStud.cx - isoStud.rx}, ${isoStud.cy - brick.stud.h}`,
            `l ${0}, ${brick.stud.h}`,
            `A ${isoStud.rx}, ${isoStud.ry} 0,0,0 ${isoStud.cx + isoStud.rx}, ${
              isoStud.cy
            }`,
            `l ${0}, ${-1 * brick.stud.h}`,
          ]}
          stroke="green"
        />
      </g>
    </Svg>
  )
}

Brick.defaultProps = {
  printWidth: 200,
  printHeight: 200,
  width: 200,
  height: 200,
  scale: 5,
}

Brick.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  scale: number,
}

export default Brick
