import randomSeeded from '../random-seeded'

// Fisher–Yates shuffle

const shuffleArraySeeded = ({ arr, seed }) => {
  const arrayCopy = [...arr]
  let currentIndex = arrayCopy.length
  let tempVal
  let randomIndex

  while (currentIndex) {
    randomIndex = Math.floor(
      randomSeeded(`${seed}:${currentIndex}`) * currentIndex--
    )

    tempVal = arrayCopy[currentIndex]
    arrayCopy[currentIndex] = arrayCopy[randomIndex]
    arrayCopy[randomIndex] = tempVal
  }

  return arrayCopy
}

export default shuffleArraySeeded
