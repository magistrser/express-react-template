import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'client', 'index.tsx'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist-client',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.client.json',
            transpileOnly: true,
          },
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.client.json',
      }),
    ],
  },
  output: {
    globalObject: 'this',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-client'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'public', 'index.html'),
      favicon: path.join(__dirname, 'src', 'client', 'public', 'favicon.ico'),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, 'tsconfig.client.json'),
      },
    }),
  ],
};
