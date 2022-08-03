module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@app/screens': './src/screens/index.ts',
          '@app/components': './src/components/index.ts',
          '@app/state': './src/state/index.ts',
        },
      },
    ],
  ],
};
