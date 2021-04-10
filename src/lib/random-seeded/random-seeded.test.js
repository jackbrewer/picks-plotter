import randomSeeded from '../random-seeded'

describe('randomSeeded()', () => {
  test('should always return the same value', () => {
    expect(randomSeeded('123')).toEqual(0.6159101026132703)
    expect(randomSeeded('example')).toEqual(0.35484428447671235)
  })
})
