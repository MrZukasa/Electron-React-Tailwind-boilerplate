const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.jsx',             //entry point per il file principale dell'app react
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,          //filtro per avere a disposizione tutte le estensioni che mi servono
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          // loader aggiuntivo per tailwind
          'postcss-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],             // come sempre vogliamo tutte le estensioni
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};