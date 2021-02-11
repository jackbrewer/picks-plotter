module.exports = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  coverageReporters: ['text'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
