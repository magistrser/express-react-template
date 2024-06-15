import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import assertNever from 'assert-never';

enum Edition {
    Local = 'local',
    External = 'external',
}

function editionFromString(edition: string): Edition {
  switch (edition) {
    case Edition.Local:
      return Edition.Local;

    case Edition.External:
      return Edition.External;

    default:
      throw new Error(`Unexpected edition: ${edition}`);
  }
}

function getTsConfigByEdition(strEdition: string | undefined): string {
  if (!strEdition) {
    throw new Error('edition is undefined');
  }

  const edition = editionFromString(strEdition);
  switch (edition) {
    case Edition.Local:
      return 'tsconfig.server.local.json';

    case Edition.External:
      return 'tsconfig.server.external.json';

    default:
      assertNever(edition);
  }
}

module.exports = {
  target: 'node',
  entry: {
    app: path.join(__dirname, 'src', 'server', 'index.ts'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.client.json',
            transpileOnly: true,
          },
        }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: getTsConfigByEdition(process.env.EDITION),
      }),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-server'),
    publicPath: '/',
  },
  externalsType: 'commonjs',
  externals: {
    '@ffmpeg-installer/ffmpeg': '@ffmpeg-installer/ffmpeg',
    '@ffmpeg-installer/linux-x64': '@ffmpeg-installer/linux-x64',
    '@ffmpeg-installer/linux-arm64': '@ffmpeg-installer/linux-arm64',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, getTsConfigByEdition(process.env.EDITION)),
      },
    }),
  ],
};
