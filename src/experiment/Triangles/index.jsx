import React from 'react'
import { bool, number } from 'prop-types'
import triangulate from 'delaunay-triangulate'

import getRandomFloat from '../../lib/random-float'

import Svg from '../../component/Svg'
import Group from '../../component/Group'
import Polygon from '../../component/Polygon'
import Rect from '../../component/Rect'
import Circle from '../../component/Circle'

const Triangles = ({
  width,
  height,
  printWidth,
  printHeight,
  pointCount,
  nodes,
  triangles,
}) => {
  const positions = [...Array(pointCount).keys()].map(() => {
    // Margin from print edge in centimeters
    const margin = 20
    // Return a random 2D point inset by this margin
    return [
      getRandomFloat(margin, width - margin),
      getRandomFloat(margin, height - margin),
    ]
  })

  const cells = triangulate(positions)

  const lines = cells
    .map((cell) => {
      // Get vertices for this cell
      const triangle = cell.map((i) => positions[i])
      // // Close the path
      // triangle.push(triangle[0])
      return triangle
    })
    .sort(function (a, b) {
      return a[0] + a[1] < b[0] + b[1]
    })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      {triangles &&
        lines.map((line, i) => <Polygon key={`line:${i}`} points={line} />)}
      {nodes &&
        positions.map((position, i) => (
          <Circle
            key={`circle:${i}`}
            cx={position[0]}
            cy={position[1]}
            r={10}
            stroke="red"
            strokeWidth="2"
          />
        ))}
      <Group label="% Placeholder">
        <Rect width={width} height={height} />
      </Group>
    </Svg>
  )
}

Triangles.defaultProps = {
  printWidth: 180,
  printHeight: 180,
  width: 1000,
  height: 1000,
  pointCount: 100,
}

Triangles.propTypes = {
  width: number,
  height: number,
  printWidth: number,
  printHeight: number,
  pointCount: number,
  nodes: bool,
  triangles: bool,
}

export default Triangles
