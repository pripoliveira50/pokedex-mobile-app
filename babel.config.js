module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        regenerator: true,
      }],
      [
        'module-resolver',
        {
          root: '.',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@config': './src/config',
            '@utils': './src/utils',
            '@assets': './assets',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@global': './src/global',
            '@routes': './src/routes',
            '@context': './src/context',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
