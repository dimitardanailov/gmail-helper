const path = require('path')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['./styles/app.css', './src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: ['node_modules'],
  },
  
  // https://github.com/webpack-contrib/karma-webpack
  devtool: 'inline-source-map',

  plugins: [
    
    // https://github.com/mrsteele/dotenv-webpack
    new Dotenv({
      // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      safe: true, 

      // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      systemvars: true,
    }),

    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              import: true,
              url: true,
              importLoaders: 2
            }
          }
        ],
      },
    ],
  },
  /*
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // https://babeljs.io/docs/en/usage
                  targets: {
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1',
                    ios: '11',
                    android: '61'
                  },

                  useBuiltIns: 'usage'
                }
              ]
            ],
            plugins: [
              '@babel/plugin-transform-classes',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-async-to-generator',
              '@babel/plugin-transform-new-target',

              // https://github.com/github/babel-plugin-transform-custom-element-classes
              'transform-custom-element-classes',
              'transform-es2015-classes'
            ]
          }
        }
      }
    ]
  } */
}
