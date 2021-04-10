import React, { useEffect, useRef } from 'react'
import { number } from 'prop-types'

const FunctionGridCanvas = ({ width, height, cols, rows, n }) => {
  const canvas = useRef()

  useEffect(() => {
    const w = width / cols
    const h = height / rows
    const context = canvas.current.getContext('2d')
    context.clearRect(0, 0, width, height)
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        if ((x ^ y) % n) {
          context.fillRect(x * w, y * h, w, h)
        }
      }
    }
  }, [cols, rows, height, width, n])

  return <canvas ref={canvas} width={width} height={height} />
}

FunctionGridCanvas.defaultProps = {
  n: 9,
}

FunctionGridCanvas.propTypes = {
  width: number,
  height: number,
  cols: number,
  rows: number,
  n: number,
}

export default FunctionGridCanvas
