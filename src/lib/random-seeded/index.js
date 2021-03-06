// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript

const sfc32 = (a, b, c, d) => {
  return function () {
    a >>>= 0
    b >>>= 0
    c >>>= 0
    d >>>= 0
    let t = (a + b) | 0
    a = b ^ (b >>> 9)
    b = (c + (c << 3)) | 0
    c = (c << 21) | (c >>> 11)
    d = (d + 1) | 0
    t = (t + d) | 0
    c = (c + t) | 0
    return (t >>> 0) / 4294967296
  }
}

const xmur3 = (str) => {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}

// const mulberry32 = (a) => {
//   return function () {
//     let t = (a += 0x6d2b79f5)
//     t = Math.imul(t ^ (t >>> 15), t | 1)
//     t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
//     return ((t ^ (t >>> 14)) >>> 0) / 4294967296
//   }
// }

const randomSeeded = (seed) => {
  const seedFn = xmur3(seed + '')
  const rand = sfc32(seedFn(), seedFn(), seedFn(), seedFn())
  // const rand = mulberry32(seedFn())
  return rand()
}

export default randomSeeded
