const findMatchIndex = ({ availables, possibles }) => {
  let remainingPossibles = possibles
  let index = -1

  while (remainingPossibles.length > 0) {
    const i = availables.indexOf(remainingPossibles[0])
    remainingPossibles = remainingPossibles.slice(1)
    if (i > -1) {
      index = i
      break
    }
  }

  return index
}

export default findMatchIndex
