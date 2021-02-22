import sample from '../../../../lib/sample'
import shuffleArray from '../../../../lib/shuffle-array'
import findMatchIndex from '../find-match-index'

const generatePossibles = ({ current, rows, cols }) => {
  const possibles = []
  // above (if row exists)
  if (current - rows >= 0) {
    possibles.push(current - cols)
  }
  // below (if row exists)
  if (current + rows < rows * cols) {
    possibles.push(current + cols)
  }
  // before (if on same row)
  if (Math.floor(current / cols) === Math.floor((current - 1) / cols)) {
    possibles.push(current - 1)
  }
  // after (if on same row)
  if (Math.floor(current / cols) === Math.floor((current + 1) / cols)) {
    possibles.push(current + 1)
  }
  return possibles
}

const loopAvailables = ({ availables, current, rows, cols, group, groups }) => {
  const remainingAvailables = availables
  let curr = current

  while (remainingAvailables.length > 0) {
    remainingAvailables.splice(remainingAvailables.indexOf(curr), 1)

    const possibles = generatePossibles({ current: curr, rows, cols })
    const matchIndex = findMatchIndex({
      availables: remainingAvailables,
      possibles: shuffleArray(possibles),
    })

    if (matchIndex && matchIndex > -1) {
      if (!groups[group]) groups[group] = []
      groups[group].push(remainingAvailables[matchIndex])
      curr = remainingAvailables[matchIndex]
    } else {
      group++
      curr = sample(remainingAvailables)
    }
  }
  return groups
}

export default loopAvailables
