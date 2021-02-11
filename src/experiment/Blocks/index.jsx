import React from 'react'
import { number } from 'prop-types'

const getBlockTypes = (count) => {
  const blockTypes = []
  for (let i = count; i >= count / 2; i--) {
    const split = count - i
    const splitArr = [count - split, split]
    blockTypes.push(splitArr)
  }
  return blockTypes
}

const Blocks = ({ max, size }) => {
  const blockTypes = [...Array(max).keys()].map((i) => getBlockTypes([i + 1]))
  let rowY = 0
  let blockY = 0
  return (
    <>
      {blockTypes.map((blockType, i) => {
        rowY += i + 1
        return (
          <g
            key={`blockType:${i}`}
            className="row"
            transform={`translate(0, ${rowY * size})`}
          >
            {blockType.map((block, j) => {
              blockY = 0
              return (
                <g key={`block:${j}`} className="col">
                  {block.map((blockPart, k) => {
                    if (blockPart === 0) return null
                    const y = blockY
                    blockY += blockPart
                    return (
                      <rect
                        key={`blockPart:${k}`}
                        x={j * size * 2}
                        y={y * size}
                        width={size}
                        height={size * blockPart}
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                      />
                    )
                  })}
                </g>
              )
            })}
          </g>
        )
      })}
    </>
  )
}

Blocks.defaultProps = { max: 9, size: 10 }

Blocks.propTypes = { max: number, size: number }

export default Blocks

// const a = []
// while (remaining > 0) {
//   if (i <= remaining) {
//     a.push(i)
//     remaining -= i
//     console.log({ a, remaining })
//   } else {
//     console.log('safety hatch')
//     remaining = 0
//   }
// }
