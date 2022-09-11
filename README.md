Note: Create React App’s `react-scripts` installs a version of `express` as requirement for `webpack-dev-server`.

Note: Create React App’s `react-scripts` handles the installation of the following packages: `webpack`, `webpack-cli`, `webpack-node-externals`, `@babel/core`, `babel-loader`, `@babel/preset-env`, `@babel/preset-react`.

--- 

- `.babelrc`: The `.babelrc` file is your local configuration for your code in your project. It will affect all files that Babel processes that are in the same directory or in sibling directories of the `.babelrc`.
- `.babelrc.json`: An earlier version used a `.babelrc` file (without the .json file extension). This was a configuration file for Babel 6, but this is no longer the case for Babel 7.

<sub>FYI</sub>

- About Babel: [Babel is a JavaScript compiler](https://babeljs.io/docs/en).
- Videos around Babel: [Conferences and Meetups](https://babeljs.io/videos.html).


About `webpack`:

---

- The `dev:build-server` script sets the environment to "development" and invokes webpack with the configuration file you created earlier. 
- The `dev:start` script invokes `nodemon` to serve the built output.
- The `dev` script invokes `npm-run-all` to run in parallel the build script and all scripts that start with `dev:*` - including `dev:build-server` and `dev:start`.

Dependencies: 

```bash
npm install nodemon --save-dev
npm install npm-run-all --save-dev
```