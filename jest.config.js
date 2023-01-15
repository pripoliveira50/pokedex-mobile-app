module.exports = {
  preset: 'jest-expo',
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/coverage/**'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './setup-tests.js',
  ],
  modulePathIgnorePatterns: ['mocks'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|styled-components/native|react-native-responsive-fontsize|axios|@react-native-community/async-storage/(?!(lib)))',
  ],
};
