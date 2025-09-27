const path = require('path');

module.exports = (env) => {
  const name = env.name;
  
  return {
    mode: 'development',
    entry: path.resolve(__dirname, `${name}.js`),
    output: {
      filename: `${name}.js`,
      path: path.resolve(__dirname, '../mfe-builds'),
      libraryTarget: 'system'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    externals: ['react', 'react-dom', 'single-spa-react']
  };
};
