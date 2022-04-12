const webpack = require('webpack')
const path = require('path')

module.exports = (env) => {
  return {
    entry : {
      app: './src/index.js',
    },
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    target: 'web',
    output : {
      filename: '[name].js',
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                  }
                ]
              ]
            }
          }
        }
      ]
    },
    devServer: {
      // hot: false,
      // watchContentBase: true,
      open: true,
      static: {
        directory: path.join(__dirname, 'dist'),
        watch: true,
      }
    },
  }
};
