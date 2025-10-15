module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // 'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@types': './src/types',
        },
      },
    ],
  ],
};
