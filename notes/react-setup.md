# This guide will get you started with setting up a new React project from scratch

**Prerequisites:**

1. Node JS - Install from [here](https://nodejs.org/en/). It doesn't matter which version you download. You can check if Node is installed by typing `node -v` into your command line interface (CLI). If it prints a version number you have Node installed.

2. Webpack & Webpack Dev Server - Install with `npm i -g webpack webpack-dev-server`. You may have to prefix this command with `sudo` i.e. `sudo npm i -g webpack webpack-dev-server`. You can check if they are installed by typing `webpack -v` and `webpack-dev-server -v` into your command line interface. If they print version numbers you have webpack & webpack-dev-server installed.

---

1. Run `npm init` in your project's root directory (`npm init -y` for default project settings)

2. Run `npm i -S react react-dom bootstrap jquery` to install dependencies (short for `npm install --save react react-dom bootstrap jquery`)

3. Run this to install developer dependencies (short for `npm install --save-dev babel-core babel-loader...`):

  ```
  npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server
  ```

4. In the root directory create a webpack.config.js file with [this](https://github.com/BeachCodersAcademy/CodeWave/blob/master/notes/webpack.config.js) inside

5. In the root directory create an index.html page & make sure you add a div with an id of 'app' (i.e. `<div id="app"></div>`) and a link to bundle.js (bundle.js is what webpack will create automatically (found in webpack.config.js)). Then link Bootstrap and jQuery as found [here](https://github.com/BeachCodersAcademy/CodeWave/blob/master/notes/react-index.html).

6. In the root directory make a src folder with an index.js file inside

7. In your index.js file have something render to index.html, i.e:

  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';

  ReactDOM.render(
    <h1>Hello World!</h1>, 
    document.getElementById('app')
  );
  ```

8. Run `webpack` from the root directory of your project. This will transform files so that they can be run on any browser (i.e. JSX to JS)

9. Run `webpack-dev-server` from the root directory. This will start a local server. Go to the URL it tells you to go to (localhost:8080)

10. Inside the src folder create a components folder with an App.js file inside - this file is going to be the main component

11. Create any other component you need for your app and keep it in the components folder

In the end your file structure should look like this:
![React File Structure](https://github.com/BeachCodersAcademy/CodeWave/blob/master/notes/images/react-file-structure.png)
