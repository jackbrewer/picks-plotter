const gridCells = ({ width, height, cols, rows, gutter, gap }) => {
  const cellWidth = width / cols
  const cellHeight = height / rows
  const cells = []

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      cells.push({
        col: x,
        row: y,
        x: x * cellWidth,
        y: y * cellHeight,
      })
    }
  }

  return {
    width: cellWidth,
    height: cellHeight,
    cells,
  }
}

export default gridCells
