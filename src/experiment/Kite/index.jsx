import React from 'react'
import { number, string } from 'prop-types'

import mapRange from '../../lib/map-range'
import randomSeeded from '../../lib/random-seeded'

import Svg from '../../component/Svg'
import Polygon from '../../component/Polygon'
import Polyline from '../../component/Polyline'

import Bow from './component/Bow'

import getKitePoints from './lib/get-kite-points'
import getTail from './lib/get-tail'
import getBows from './lib/get-bows'
import getString from './lib/get-string'

const Kite = ({
  printWidth,
  printHeight,
  width,
  height,
  seed,
  size,
  defaultRotation,
  offset,
}) => {
  // These would come as an array - one set for each kite
  const x = 0.5
  const y = 0.15

  const bowSize = 3

  const rotation =
    defaultRotation > 0 || defaultRotation < 0
      ? defaultRotation
      : mapRange({
          value: randomSeeded(`${seed}:rotation`),
          min2: -45,
          max2: 45,
        })

  // Kite
  const { kiteShapePoints, kiteStickPoints, kitePoi } = getKitePoints({
    size,
    width,
    height,
    rotation,
    x,
    y,
  })

  // Tail
  const { tailPoints, tailRotations } = getTail({
    seed,
    origin: kitePoi.tailOrigin,
    offset,
  })

  // Bows
  const bows = getBows({ tailPoints, tailRotations, bowSize })

  // String
  const { stringPath } = getString({
    seed,
    origin: kitePoi.stringOrigin,
    height,
    width,
  })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g transform={`rotate(${rotation}, ${width * x}, ${height * y})`}>
        <Polygon
          points={kiteShapePoints}
          stroke="red"
          strokeWidth="0.2mm"
          fill="pink"
        />
        <Polyline
          points={kiteStickPoints[0]}
          stroke="brown"
          strokeWidth="0.2mm"
        />
        <Polyline
          points={kiteStickPoints[1]}
          stroke="brown"
          strokeWidth="0.2mm"
        />
        <Polyline points={tailPoints} stroke="black" strokeWidth="0.1mm" />

        {bows.map((bow, i) => (
          <Bow key={i} {...bow} strokeWidth="0.1mm" />
        ))}
      </g>
      <path d={stringPath} stroke="grey" strokeWidth="0.1mm" />
    </Svg>
  )
}

Kite.defaultProps = {
  printWidth: 210,
  printHeight: 297,
  seed: '',
  width: 210,
  height: 297,
  size: 20,
  offset: 0,
}

Kite.propTypes = {
  printWidth: number,
  printHeight: number,
  seed: string,
  width: number,
  height: number,
  size: number,
  defaultRotation: number,
  offset: number,
}

export default Kite
