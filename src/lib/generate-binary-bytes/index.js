import shuffleArray from '../shuffle-array'

const generateBinaryBytes = ({ bits, count, shuffle, sort }) => {
  const bytes = [...Array(count).keys()].map((i) =>
    (i >>> 0)
      .toString(2)
      .padStart(bits, '0')
      .split('')
      .map((j) => +j)
  )

  if (sort) {
    bytes
      // Sort by number of lines in each circle
      .sort((a, b) => {
        const totalA = a.reduce((c, d) => c + d, 0)
        const totalB = b.reduce((c, d) => c + d, 0)
        return totalA < totalB ? -1 : 1
      })
      // Sort within the line-sorted sections
      .sort((a, b) => {
        const totalA = a.reduce((c, d) => c + d, 0)
        const totalB = b.reduce((c, d) => c + d, 0)
        if (totalA === totalB) {
          return a.join('') > b.join('') ? -1 : 1
        }
        return 0
      })
  }

  const readyBytes = shuffle ? shuffleArray([...bytes]) : bytes

  return readyBytes
}

export default generateBinaryBytes
