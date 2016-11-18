# This guide will get you started with setting up a new React project from scratch

**Make sure you have [Node JS](https://nodejs.org/en/) installed**

1. Run `npm init` in your project's root directory (`npm init -y` for default project settings)
* Run `npm i -S react react-dom` to install dependencies
* Run `npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server` to install developer dependencies
* Make sure you have webpack & webpack dev server installed globally (you only have to do this once). To install enter `npm i -g webpack webpack-dev-server` (you may have to prefix this command with `sudo` i.e. `sudo npm i -g webpack webpack-dev-server`)
* Create a webpack.config.js file with [this](https://github.com/BeachCodersAcademy/CodeWave/blob/master/notes/webpack.config.js) inside
* Create an index.html page & make sure you add a div with an id of 'app' (i.e. `<div id="app"></div>`) and a link bundle.js (bundle.js is what webpack will create automatically (found in webpack.config.js))
* Make a src folder in the root direcotry with an index.js file inside
* In your index.js file have something render to index.html, i.e. 

```javascript
let React = require('react'); let ReactDOM = require('react-dom'); ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('app'));
```

* Run `webpack` from the root directory of your project. This will transform files so that they can be run on any browser (i.e. JSX to JS)
* Run `webpack-dev-server` from the root directory. This will start a local server. Go to the URL it tells you to go to (localhost:8080)
* Inside the src folder create a components folder with an app.js file inside - this file is going to be the main component
* Create any other component you need for your app and keep it in the components folder
