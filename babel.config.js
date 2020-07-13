module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    "@babel/env",
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};





//changed @babel/env to @babel/preset-env