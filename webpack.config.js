const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env = {}) => {
  let copies = [
    'postmessenger',
    'runningcookie'
  ].map((repository) => {
    return {
      context: 'node_modules/' + repository + '/dist',
      from: '**/*',
      to: 'cdn/' + repository
    };
  });

  return {
    context: path.resolve(__dirname),
    entry: {
      'dist/js/app': './src/app.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname)
    },
    plugins: [
      new CopyWebpackPlugin(copies)
    ]
  };
};
