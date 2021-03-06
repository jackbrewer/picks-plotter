import randomWords from 'random-words'

const generateSeed = () => randomWords({ exactly: 3, join: ' ' })

export default generateSeed
