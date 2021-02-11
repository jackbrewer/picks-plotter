import React, { Fragment } from 'react'
import { number, arrayOf, object, string } from 'prop-types'

import mapRange from '../../lib/map-range'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polygon from '../../component/Polygon'
import Rect from '../../component/Rect'

const RiffCircle = ({
  dataSets,
  width,
  height,
  printWidth,
  printHeight,
  color1,
  color2,
  rotation,
}) => {
  const c = { x: width / 2, y: height / 2 }
  const d = Math.min(width, height)
  const r = d / 2

  const getPoints = ({ points, min, max }) => {
    return points.map((point, i) => {
      const multiplier = mapRange({
        value: point,
        min1: 0,
        max1: 1,
        min2: min,
        max2: max,
      })
      const x =
        c.x + r * multiplier * Math.cos((2 * Math.PI * i) / points.length)
      const y =
        c.y + r * multiplier * Math.sin((2 * Math.PI * i) / points.length)
      return [x, y]
    })
  }

  const formattedSets = dataSets.reverse().map((data, i) => {
    const max = (1 / (dataSets.length * 1.5)) * (i + 1) + 0.3
    const min = (1 / (dataSets.length * 1.5)) * (i + 1 - 1) + 0.3
    const left = getPoints({ points: data.left, min, max })
    const right = getPoints({ points: data.right, min, max })
    return [left, right]
  })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g transform={`rotate(${-90 + rotation}, ${c.x}, ${c.y})`}>
        {formattedSets.map((points, i) => (
          <Fragment key={i}>
            <Group label="1 Left">
              <Polygon
                points={points[0]}
                strokeWidth="1"
                stroke={color1}
                strokeOpacity="1"
              />
            </Group>
            <Group label="2 Right">
              <Polygon
                points={points[1]}
                strokeWidth="1"
                stroke={color2}
                strokeOpacity="1"
              />
            </Group>
          </Fragment>
        ))}
      </g>
      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

RiffCircle.defaultProps = {
  printWidth: 180,
  printHeight: 180,
  width: 1000,
  height: 1000,
  dataSets: [],
  color1: 'blue',
  color2: 'red',
  rotation: 0,
}

RiffCircle.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  dataSets: arrayOf(object),
  color1: string,
  color2: string,
  rotation: number,
}

export default RiffCircle
