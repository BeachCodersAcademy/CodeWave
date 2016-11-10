# This guide will get you started with setting up a new React project from scratch

**Make sure you have [Node JS](https://nodejs.org/en/) installed**

1. Run `npm init` in your project's root directory (`npm init -y` for default project settings)
* Run `npm i -S react react-dom` to install dependencies
* Run `npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server` to install developer dependencies
* Make sure you have webpack & webpack dev server installed globally `npm i -g webpack webpack-dev-server` (you may have to prefix this command with `sudo`)
* Create a webpack.config.js file with [this](https://github.com/BeachCodersAcademy/CodeWave/blob/master/notes/webpack.config.js) inside
* Create an index.html page & make sure you link bundle.js (bundle.js is what webpack will create automatically (found in webpack.config.js))
* Make a src folder in the root direcotry with an index.js file inside
* In your index.js file have something render to index.html (i.e. `ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('app'));`)
* Run `webpack-dev-server` from the root directory - you should see your message in the console
* Inside the src folder create a components folder with an app.js file inside - this file is going to be the main component
