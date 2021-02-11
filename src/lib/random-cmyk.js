import randomInt from './random-int'

const colours = ['cyan', 'magenta', 'yellow', 'black']

export const randomCmy = () => colours[randomInt(0, 2)]

export const randomCmyk = () => colours[randomInt(0, 3)]
