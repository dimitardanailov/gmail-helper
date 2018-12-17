const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // https://github.com/mrsteele/dotenv-webpack
    new Dotenv({
      // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      safe: true, 

      // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      systemvars: true,
    }),
  ]
}