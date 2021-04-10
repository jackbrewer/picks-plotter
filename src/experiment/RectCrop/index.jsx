import React from 'react'
import { number } from 'prop-types'

import Svg from '../../component/Svg'
import Polyline from '../../component/Polyline'
import Group from '../../component/Group'

import cropPathToRect from './lib/crop-path-to-rect'

const RectCrop = ({
  printWidth,
  printHeight,
  width,
  height,
  top,
  right,
  bottom,
  left,
}) => {
  const clipPoints = [
    [width * left, height * top],
    [width * right, height * bottom],
  ]
  const gridLines = 11
  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Group label="Test">
        {[...Array(gridLines).keys()].map((i) => (
          <Polyline
            key={i + 'v'}
            points={cropPathToRect({
              points: [
                [(width / (gridLines - 1)) * i, 0],
                [(width / (gridLines - 1)) * i, height],
              ],
              clipPoints,
            })}
            stroke="red"
          />
        ))}
        {[...Array(gridLines).keys()].map((i) => (
          <Polyline
            key={i + 'v'}
            points={cropPathToRect({
              points: [
                [0, (height / (gridLines - 1)) * i],
                [width, (height / (gridLines - 1)) * i],
              ],
              clipPoints,
            })}
            stroke="cyan"
          />
        ))}
        <Polyline
          points={cropPathToRect({
            points: [
              [width * 0.25, height * 0.75],
              [width * 0.75, height * 0.05],
            ],
            clipPoints,
          })}
          stroke="green"
        />
        <Polyline
          points={cropPathToRect({
            points: [
              [width * 0.15, height * 0.75],
              [width * 0.25, height * 0.05],
              [width * 0.75, height * 0.75],
              [width * 0.55, height * 0.35],
            ],
            clipPoints,
          })}
          stroke="black"
        />
      </Group>
      <Group label="Guides">
        <Polyline points={clipPoints} stroke="lime" />
        {/* <Polyline
          points={[
            clipPoints[0],
            [clipPoints[1][0], clipPoints[0][1]],
            clipPoints[1],
            [clipPoints[0][0], clipPoints[1][1]],
            clipPoints[0],
          ]}
          stroke="orange"
        /> */}
      </Group>
    </Svg>
  )
}

RectCrop.defaultProps = {
  top: 0.1,
  right: 0.9,
  bottom: 0.9,
  left: 0.1,
}

RectCrop.propTypes = {
  printWidth: number,
  printHeight: number,
  width: number,
  height: number,
  top: number,
  right: number,
  bottom: number,
  left: number,
}

export default RectCrop
