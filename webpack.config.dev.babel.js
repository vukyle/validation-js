import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssImport from 'postcss-import';
import postcssExtend from 'postcss-extend';
import postcssReporter from 'postcss-reporter';
// get plugins array
import plugins from './plugins.js';
const glob = require("glob");
// dynamically get entry points from what js files are in the root of src
var entry = glob.sync('./src/*.js').reduce((entries, entry) => Object.assign(entries, {
  [entry.replace('./src/', '').replace('.js', '')]: entry.replace('./src/', './')
}), {})
// function to check if object is empty
function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}
// Check if any entry points have been created. Stop code if none have
if(isEmpty(entry)){
  console.log("No entry points provided.  Please create at least on .js entry point in src/");
  process.exit()
}

module.exports = env => {

  return {
    context: path.resolve(__dirname, 'src'),

    entry: entry,

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js'
    },


    watch: env.dev,

    devtool: 'cheap-module-eval-source-map',

    mode: "production",

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src/js'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                plugins: ['transform-runtime']
              }
            },
            {
              loader: 'eslint-loader',
              options: {
                cache: true,
                emitWarning: true,
                configFile: '.eslintrc'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: [
                    postcssImport,
                    postcssExtend,
                    postcssReporter({ clearReportedMessages: true }),
                  ]
                }
              }
          ],
        },
        {
          test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: [
                    autoprefixer({
                      browsers: [
                        '> 5%',
                        'last 2 versions',
                        'Firefox > 20',
                        'Safari >= 8',
                        'not ie <= 8'
                      ],
                      cascade: false
                    }),
                    postcssReporter({ clearReportedMessages: true }),
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ],

        },
        {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: 'assets/',
                publicPath: '../assets/',
                progressive: true,
                pngquant: {
                  quality: '75-90',
                  speed: 4
                },
                mozjpeg: {
                  quality: 75
                },
                gifsicle: {
                  interlaced: true
                }
              }
            },
          ]
        },
        {
          test: /\.(woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: 'assets/',
                publicPath: '../',
              }
            }
          ]
        },
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: plugins,
  }
};

