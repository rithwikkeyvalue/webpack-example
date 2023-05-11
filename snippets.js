/*
  npm i webpack webpack-cli -D
  npm i css-loader style-loader html-webpack-plugin -D
  npm i webpack-dev-server -D
  npm i react react-dom
  npm i @babel/core @babel/preset-env @babel/preset-react babel-loader
  npm i file-loader -D
  npm i dotenv dotenv-webpack -D
*/


const getRandomName = () => {
  const names = ['Jeff', 'Tom', 'Bob', 'Lord Octavious the Fifth', 'Jack'];

  const randomIndex = Math.floor(Math.random() * names.length);

  return names[randomIndex];
};

export default getRandomName;

//--------------------------------------------

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

//-------------------------------------------------

module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}

//---------------------------------------------------

plugins: [
  new HtmlWebpackPlugin({
    title: 'Webpack Workshop',
    filename: 'index.html',
    template: 'src/template.html'
  })
]

//-----------------------------------------------------

import getRandomName from "./getRandomName";

function getNameElement() {
  const element = document.createElement('div');
  element.innerHTML = ('my name is actually ' + getRandomName())

  return element;
}

document.getElementById('name').appendChild(getNameElement())

//---------------------------------------------------------

/*
devServer: {
  static: {
    directory: path.resolve(__dirname,'dist')
  },
  port: 3000,
  open: true,
  hot: true,
}
*/

//--------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import './main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export default App;

import React from 'react';


const Name = () => {
  return (
    <div>
      {getRandomName()}
    </div>
  );
}
 
// export default Name;

import React from "react";

import Name from "./components/Name";

function App () {
  return (
    <div>
      React

      <Name />
    </div>
  )
};

// export default App;

//-----------------------------------------------

/*
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  }

  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }

*/

//-----------------------------------------------

/*
{
  test: /\.(jpeg|png|jpg|svg|gif)$/i,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'images'
  }
}
*/

//----------------------------------------------

/*
  const Dotenv = require('dotenv-webpack');
    new Dotenv(),

*/







