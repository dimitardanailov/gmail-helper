const path = require('path')

module.exports = function(config) {
  config.set({

    // List of plugins to load. A plugin can be a string (in which case it will be required by Karma) 
    // or an inlined plugin - Object. 
    // By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],

    // run in Chrome and Firefox
    browsers: [
      'ChromeHeadless', 
      // 'FirefoxHeadless'
    ],

    frameworks: ['mocha'],
    
    files: [
      { 
        pattern: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'), 
        watched: false 
      },
      { 
        pattern: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'), 
        watched: false 
      },
      {
        pattern: path.resolve(__dirname, './tools/testing-helper.js'),
        watched: false
      },
      { 
        pattern: 'src/components/*.unittest.js', 
        watched: false 
      },
      { 
        pattern: 'src/components/**/*.unittest.js', 
        watched: false 
      },
      { 
        pattern: 'src/components/**/**/*.unittest.js', 
        watched: false 
      }
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/components/*.unittest.js': [ 'webpack', 'sourcemap' ],
      'src/components/**/*.unittest.js': [ 'webpack', 'sourcemap' ],
      'src/components/**/**/*.unittest.js': [ 'webpack', 'sourcemap' ],
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // just do inline source maps instead of the default
      devtool: 'inline-source-map', 
      mode: 'development',

      resolve: {
        modules: [
          path.resolve(__dirname, './node_modules')
        ]
      }
    },

    webpackServer: {
      // noInfo: true // please don't spam the console when running in karma!
    },
    
    reporters: ['progress'],
    
    // karma web server port
    port: 9876,  
    
    // Enable or disable colors in the output (reporters and logs).
    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    // Karma captures browsers, runs the tests and exits
    singleRun: true, 

    // Especially on services like SauceLabs and Browserstack, it makes sense only to 
    // launch a limited amount of browsers at once, and only start more when those have finished. 
    // Using this configuration, you can specify how many browsers 
    // should be running at once at any given point in time.
    concurrency: Infinity
  })
}
