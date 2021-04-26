import React from 'react'
import { arrayOf, bool, number, oneOf, string } from 'prop-types'

import Svg from '../../component/Svg'

import randomSeeded from '../../lib/random-seeded'
import gridCells from '../../lib/grid-cells'
import shuffleArraySeeded from '../../lib/shuffle-array-seeded'

import BrickStacked24 from './brick-24-stacked.svg'
import BrickStacked46 from './brick-46-stacked.svg'

const getFlip = ({ seed, flipMode, i }) => {
  if (flipMode === 'none') return false
  if (flipMode === 'all') return true
  if (flipMode === 'alternate') return i % 2 === 0
  if (flipMode === 'random') return randomSeeded(seed) > 0.5
}

const getColours = ({ randomColours, seed, colours, arr }) => {
  const formattedColours = arr.map((i) => {
    if (!randomColours) return [colours[0], colours[1]]

    const shuffledColours = shuffleArraySeeded({
      arr: [...colours],
      seed: `color:${seed}:${i}`,
    })
    return [shuffledColours[0], shuffledColours[1]]
  })

  return formattedColours
}

const BrickGrid = ({
  printWidth,
  printHeight,
  seed,
  rows,
  cols,
  xOffset,
  yOffset,
  flipMode,
  shuffle,
  all,
  colours,
  randomColours,
}) => {
  const BrickStacked = all ? BrickStacked46 : BrickStacked24
  const brickViewBox = BrickStacked().props.viewBox.split(' ')
  const width = brickViewBox[2] * cols * xOffset
  const height = brickViewBox[3] * rows * yOffset
  const validChildren = React.Children.toArray(
    BrickStacked().props.children
  ).filter((c) => c.type === 'g')
  // const indexes = [...Array(rows * cols).keys()]
  const indexes = [...Array(validChildren.length).keys()]
  const shuffledIndexes = shuffle
    ? shuffleArraySeeded({ arr: indexes, seed })
    : indexes
  const grid = gridCells({ width, height, rows, cols })
  const cells = grid.cells.map((cell, i) => ({
    ...cell,
    brickIndex: shuffledIndexes[i],
  }))
  const formattedColours = getColours({
    randomColours,
    seed,
    colours,
    arr: indexes,
  })

  return (
    <Svg
      width={`${printWidth}mm`}
      height={`${printHeight}mm`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <style>
        {(() => `
          .st0{opacity:0.2;}
          .st1{fill:none;stroke-width:2;}
          .st2{fill:none;stroke-width:4;}
          .st3{opacity:0.2;}
          .st4{fill:none;stroke-width:2;}
          .st5{fill:none;stroke-width:4;}

          // polygon { fill-opacity:0.1; }
          .st0, .st3 { stroke: none !important; }
          line, ellipse, path, .st1, .st2, .st4, .st5 { fill: none !important; }
        `)()}
      </style>
      {cells.map((cell, i) => {
        return (
          <g key={i} transform={`translate(${cell.x}, ${cell.y})`}>
            <g
              transform={
                getFlip({ seed: `flip:${seed}:${i}`, flipMode, i })
                  ? `translate(${brickViewBox[2]}, 0) scale(-1, 1)`
                  : ''
              }
            >
              {validChildren[cell.brickIndex] && (
                <>
                  {React.cloneElement(
                    validChildren[cell.brickIndex].props.children[0],
                    {
                      stroke: formattedColours[cell.brickIndex][0],
                      fill: formattedColours[cell.brickIndex][0],
                    }
                  )}
                  {React.cloneElement(
                    validChildren[cell.brickIndex].props.children[1],
                    {
                      stroke: formattedColours[cell.brickIndex][1],
                      fill: formattedColours[cell.brickIndex][1],
                    }
                  )}
                </>
              )}
            </g>
          </g>
        )
      })}
    </Svg>
  )
}

BrickGrid.defaultProps = {
  printWidth: 210,
  printHeight: 297,
  seed: '',
  rows: 6,
  cols: 4,
  xOffset: 1,
  yOffset: 1.1,
  flipMode: 'none',
  shuffle: true,
  colours: ['rgb(200, 0, 0)', 'rgb(0, 0, 200)', 'rgb(255, 200, 0)'],
}

BrickGrid.propTypes = {
  printWidth: number,
  printHeight: number,
  seed: string,
  rows: number,
  cols: number,
  xOffset: number,
  yOffset: number,
  flipMode: oneOf(['all', 'alternate', 'none', 'random']),
  shuffle: bool,
  all: bool,
  colours: arrayOf(string),
  randomColours: bool,
}

export default BrickGrid
