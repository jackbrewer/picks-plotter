import randomSeeded from '../random-seeded'

// Fisher–Yates shuffle

const shuffleArraySeeded = ({ arr, seed }) => {
  let currentIndex = arr.length
  let tempVal
  let randomIndex

  while (currentIndex) {
    randomIndex = Math.floor(
      randomSeeded(`${seed}:${currentIndex}`) * currentIndex--
    )

    tempVal = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = tempVal
  }

  return arr
}

export default shuffleArraySeeded
