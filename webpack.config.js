/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { SourceMapDevToolPlugin } = require('webpack')

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const PATH_TO_BUILD_FOLDER = path.resolve(__dirname, 'src', 'main', 'resources', 'static')
const PATH_TO_SRC_FOLDER = path.resolve(__dirname, 'frontend', 'src')

const OUTPUT_HTML_FILENAME = 'generated.html'

module.exports = (/*env, opt*/) => {
  if (isDev === false && isProd === false) {
    throw new Error('NODE_ENV is not defined')
  }

  return {
    mode: process.env.NODE_ENV,

    context: PATH_TO_SRC_FOLDER,

    entry: {
      app: path.resolve(PATH_TO_SRC_FOLDER, 'main', 'index.ts'),
    },

    output: {
      filename: isProd ? 'js/[name]_[contenthash].js' : 'js/[name].dev.js',
      path: PATH_TO_BUILD_FOLDER,
      publicPath: isDev ? 'http://127.0.0.1:8000/' : '/',
    },

    /**
     * For development I use SourceMapDevToolPlugin from webpack
     */
    devtool: false,

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': PATH_TO_SRC_FOLDER,
      },
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(PATH_TO_SRC_FOLDER, 'main', 'index.html'),
        filename: '../templates/' + OUTPUT_HTML_FILENAME,
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(PATH_TO_SRC_FOLDER, 'main', 'favicon.ico'),
          to: PATH_TO_BUILD_FOLDER,
        },
      ]),
      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: 'css/[contenthash].css',
            }),
          ]
        : []),
      ...(isDev
        ? [
            new SourceMapDevToolPlugin({
              filename: '[file].map',
              exclude: ['vendor', 'polyfill'],
              columns: false,
              module: true,
            }),
          ]
        : []),
    ],

    devServer: isDev
      ? {
          contentBase: path.resolve(__dirname, 'dist'),
          host: false,
          port: 8000,
          hot: true,
          historyApiFallback: true,
          writeToDisk: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          },
        }
      : {},

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: isProd ? [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()] : [],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /(node_modules|bower_components|vendor)/,
          use: [
            {
              loader: 'ts-loader',
            },
          ].concat(
            isProd
              ? [
                  {
                    loader: 'eslint-loader',
                  },
                ]
              : [],
          ),
        },
        {
          /* Config for global styles */

          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
          include: [
            // stylesheets in node_modules and src/styles/global
            path.resolve('./node_modules'),
            path.resolve(PATH_TO_SRC_FOLDER, 'main', 'global.scss'),
          ],
        },
        {
          /* Config for local styles */

          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
                },
                sourceMap: false,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
          include: [
            // stylesheets in node_modules and src/styles/global
            path.resolve(PATH_TO_SRC_FOLDER),
          ],
          exclude: [
            path.resolve('./node_modules'),
            path.resolve(PATH_TO_SRC_FOLDER, 'main', 'global.scss'),
          ],
        },
        {
          test: /\.(svg|png|jpe?g|gif|ico)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name() {
              return '[hash]-[name].[ext]'
            },
          },
        },
      ],
    },
  }
}
