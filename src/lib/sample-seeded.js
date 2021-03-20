import randomSeeded from './random-seeded'

const sampleSeeded = ({ arr, seed }) => {
  return arr[Math.floor(randomSeeded(seed) * arr.length)]
}

export default sampleSeeded
