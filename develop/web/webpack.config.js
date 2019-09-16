const path = require("path")
const Dotenv = require("dotenv-webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin')

const {
  JS_DIR,
  COMPONENTS_DIR,
  STYLE_DIR,
  TEMPLATE_DIR,
  DIST_DIR
} = require("./utils/folders")

module.exports = {
  entry: {
    styles: `${STYLE_DIR}/app.css`,

    footer: `${COMPONENTS_DIR}/footer/`,

    buttons: `${COMPONENTS_DIR}/buttons/`,
    checkBoxes: `${COMPONENTS_DIR}/check-boxes/`,
    textFields: `${COMPONENTS_DIR}/text-fields/`,
    selectBoxs: `${COMPONENTS_DIR}/select-boxs/`,
    labels: `${COMPONENTS_DIR}/labels/`,
    forms: `${COMPONENTS_DIR}/forms/`,

    main: `${JS_DIR}/index.js`
  },

  output: {
    filename: "[name].js",
    path: DIST_DIR
  },
  resolve: {
    modules: ["node_modules"]
  },

  // https://github.com/webpack-contrib/karma-webpack
  devtool: "inline-source-map",

  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 8080,

    hot: true,
    hotOnly: true
  },

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`
          }
        }
      }
    }
  },

  plugins: [
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      template: `${TEMPLATE_DIR}/index.html`
    }),

    // https://github.com/mrsteele/dotenv-webpack
    new Dotenv({
      // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      safe: true,

      // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      systemvars: true
    }),

    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),

    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
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
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              import: true,
              url: true,
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: _ => [require("autoprefixer")]
            }
          }
        ]
      }
    ]
  }
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
