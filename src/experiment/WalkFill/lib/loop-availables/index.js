import sample from '../../../../lib/sample'
import shuffleArray from '../../../../lib/shuffle-array'
import findMatchIndex from '../find-match-index'

const generatePossibles = ({ current, rows, cols }) => {
  const possibles = []
  // above (if row exists)
  if (current - rows >= 0) {
    possibles.push(current - rows)
  }
  // below (if row exists)
  if (current + rows < rows * cols) {
    possibles.push(current + rows)
  }
  // before (if on same row)
  if (Math.floor(current / rows) === Math.floor((current - 1) / rows)) {
    possibles.push(current - 1)
  }
  // after (if on same row)
  if (Math.floor(current / rows) === Math.floor((current + 1) / rows)) {
    possibles.push(current + 1)
  }
  return possibles
}

const loopAvailables = ({ availables, current, rows, cols, group, groups }) => {
  if (!availables || availables.length === 0) return groups

  availables.splice(availables.indexOf(current), 1)

  const possibles = generatePossibles({ current, rows, cols })
  const matchIndex = findMatchIndex({
    availables,
    possibles: shuffleArray(possibles),
  })

  // console.log(
  //   availables.indexOf(current),
  //   current,
  //   possibles,
  //   availables[matchIndex],
  //   availables
  // )

  if (matchIndex && matchIndex > -1) {
    if (!groups[group]) groups[group] = []
    groups[group].push(availables[matchIndex])
    current = availables[matchIndex]
  } else {
    group++
    current = sample(availables)
  }

  return loopAvailables({
    availables,
    current,
    rows,
    cols,
    group,
    groups,
  })
}

export default loopAvailables
