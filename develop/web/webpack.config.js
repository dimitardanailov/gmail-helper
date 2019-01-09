const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: ['./src/index.js'],
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
  ],
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
