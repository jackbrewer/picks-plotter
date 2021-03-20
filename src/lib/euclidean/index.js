// return distance between two sets of x,y coordinates

import pythagoras from '../pythagoras'

const euclidean = ({ a, b }) => {
  return pythagoras({ a: b.x - a.x, b: b.y - a.y })
}

export default euclidean
