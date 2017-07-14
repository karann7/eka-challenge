const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
			alias: {
        App: 'components/App',
        Reducers: 'reducers',
        Banner: 'components/Banner.js',
        Nav: 'components/Nav',
        RegisterForm: 'containers/RegisterForm',
        Home: 'components/Home'
    },
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
