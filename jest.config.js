module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|expo|@expo|@unimodules|unimodules)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  coverageDirectory: './coverage', // Genera reportes de cobertura
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test-results",
        outputName: "test-results.xml",
      },
    ],
  ],
};
