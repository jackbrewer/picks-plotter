const getStrokeWidth = ({ edges, i, lines }) => {
  if (edges) {
    return i === 0 || i === lines - 1 ? 1 : 0.6
  }
  return 1
}

export default getStrokeWidth
