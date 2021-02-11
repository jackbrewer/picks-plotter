const randomiser = (values) => {
  let threshold = 0
  let pickedValue = null
  const randomNumber = Math.random()

  for (let i = 0; i < values.length; i++) {
    if (values[i].probability === '*') {
      continue
    }

    threshold += values[i].probability

    if (threshold > randomNumber) {
      pickedValue = values[i].value
      break
    }

    if (!pickedValue) {
      pickedValue = values.find((value) => value.probability === '*').value
    }
  }

  return pickedValue
}

export default randomiser
