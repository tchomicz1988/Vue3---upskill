module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    "^lodash-es$": "lodash"
  },
  moduleDirectories: ['node_modules', 'src'],
}
