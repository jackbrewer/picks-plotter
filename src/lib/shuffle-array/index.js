// Fisher–Yates shuffle

const shuffleArray = (array) => {
  let currentIndex = array.length
  let tempVal
  let randomIndex

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex--)

    tempVal = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = tempVal
  }

  return array
}

export default shuffleArray
