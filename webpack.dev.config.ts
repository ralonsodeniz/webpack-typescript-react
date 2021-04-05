import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

const APP_PATH = path.resolve(__dirname, 'src', 'index.tsx');
const HTML_PATH = path.resolve(__dirname, 'public', 'index.html');
const BUILD_PATH = path.resolve(__dirname, 'build');

const config: webpack.Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: APP_PATH,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|bmp|avif|webp|svg|ttf|eot|svg|woff(2)?)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_PATH,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_PATH,
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
