const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const isProd = !isDev;
console.log('IS DEV:', isDev);
console.log('IS PROD:', isProd);


const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  return config;
};


const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`);

const pluginsSet = () => {
  const plugins = [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'public'),
        to: path.resolve(__dirname, 'dist/'),
      }],
    }),
  ];

  return plugins;
};


const babelOptions = (preset) => {
  const options = {
    presets: [
      '@babel/preset-env',
    ],

    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  };


  if (preset) {
    options.presets.push(preset);
  }

  return options;
};


module.exports = {
  context: path.resolve(__dirname),
  mode: 'development',
  entry: {
    main: './src/ts/index.ts',
  },
  target: 'web',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@": path.resolve("src"),
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: pluginsSet(),
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript'),
        },
      },
    ],
  },
};
