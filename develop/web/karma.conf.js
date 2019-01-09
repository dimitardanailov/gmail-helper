module.exports = function(config) {
  const configuration = {
    frameworks: ['mocha'],
    files: [
      'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.1/custom-elements-es5-adapter.js',
      'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.1/webcomponents-loader.js',

      'tools/testing-helper.js',
      // each file acts as entry point for the webpack configuration
      { pattern: 'src/components/*.unittest.js', watched: true },
      { pattern: 'src/components/**/*.unittest.js', watched: true },
      { pattern: 'src/components/**/**/*.unittest.js', watched: true },
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/components/*.unittest.js': [ 'webpack', 'sourcemap' ],
      'src/components/**/*.unittest.js': [ 'webpack', 'sourcemap' ],
      'src/components/**/**/*.unittest.js': [ 'webpack', 'sourcemap' ]
    },

    browsers: [
      'Chrome', 
      /*
      'ChromeCanary', 
      'Firefox', 
      'FirefoxDeveloper', 
      'Safari', 
      'Opera' */
    ],

    autoWatch: true
  }

  config.set(configuration)
}
