Server-side rendering (SSR) is a popular technique for rendering a client-side single page application (SPA) **on the server** and then sending a **fully rendered** page to the client. 
- This allows for dynamic components to be served as static HTML markup.
- This approach can be useful for search engine optimization (SEO) when indexing does not handle JavaScript properly. 
  - It can be crawled for its content, even for crawlers that don’t execute JavaScript code. This can help with search engine optimization (SEO) and providing metadata to social media channels.
- It may also be beneficial in situations where downloading a large JavaScript bundle is impaired by a slow network.
- SSR can also often help with performance because a fully loaded app is sent down from the server on the first request. 
- For non-trivial apps, your mileage may vary because SSR requires a setup that can get a bit complicated, and it creates a bigger load on the server. 
- Whether to use server-side rendering for your React app depends on your specific needs and on which trade-offs make the most sense for your use case.

Three steps:

1. Creating the React App and Modifying the App Component

https://github.com/tusharnankani/react-ssr-test/blob/45e641a5649fa553b16b7b57433926f850ff908d/src/index.js#L28-L33

Note: [`hydrate` has been replaced with `hydrateRoot` in React 18.](https://reactjs.org/docs/react-dom.html#hydrate:~:text=hydrate(element%2C%20container%5B%2C%20callback%5D)-,Note%3A,replaced%20with%20hydrateRoot%20in%20React%2018.%20See%20hydrateRoot%20for%20more%20info.,-Same%20as%20render()%2C%20but%20is%20used%20to%20hydrate%20a)

2. Creating an Express Server and Rendering the App Component

Set up a server that will send along a rendered version. Using Express for the server.

Note: Create React App’s `react-scripts` installs a version of `express` as requirement for `webpack-dev-server`.

https://github.com/tusharnankani/react-ssr-test/blob/45e641a5649fa553b16b7b57433926f850ff908d/server/index.js#L13-L38

3. Configuring `webpack`, `Babel`, and `npm` Scripts

Note: Create React App’s `react-scripts` handles the installation of the following packages: `webpack`, `webpack-cli`, `webpack-node-externals`, `@babel/core`, `babel-loader`, `@babel/preset-env`, `@babel/preset-react`.

<sup>Babel</sup>

https://github.com/tusharnankani/react-ssr-test/blob/6449bffca79ef87d24703c065c495d83439dc86c/.babelrc.json#L1-L6

- `.babelrc`: The `.babelrc` file is your local configuration for your code in your project. It will affect all files that Babel processes that are in the same directory or in sibling directories of the `.babelrc`.
- `.babelrc.json`: An earlier version used a `.babelrc` file (without the .json file extension). This was a configuration file for Babel 6, but this is no longer the case for Babel 7.

Note:

- About Babel: [Babel is a JavaScript compiler](https://babeljs.io/docs/en).
- Videos around Babel: [Conferences and Meetups](https://babeljs.io/videos.html).
- [the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler): an awesome tutorial on compilers, which also explains how Babel itself works on a high level.

<sup>webpack</sup>

https://github.com/tusharnankani/react-ssr-test/blob/6449bffca79ef87d24703c065c495d83439dc86c/webpack.server.js#L1-L29

Note:

- About Webpack: [webpack is a static module bundler for modern JavaScript applications](https://webpack.js.org/concepts).
- When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

---

https://github.com/tusharnankani/react-ssr-test/blob/45e641a5649fa553b16b7b57433926f850ff908d/package.json#L19-L21

- The `dev:build-server` script sets the environment to "development" and invokes webpack with the configuration file you created earlier. 
- The `dev:start` script invokes `nodemon` to serve the built output.
- The `dev` script invokes `npm-run-all` to run in parallel the build script and all scripts that start with `dev:*` - including `dev:build-server` and `dev:start`.

Dependencies: 

```shell
npm install nodemon --save-dev
npm install npm-run-all --save-dev
```

#### References:

- [How to Enable Server-Side Rendering for a React App](https://www.digitalocean.com/community/tutorials/react-server-side-rendering)
- [Understanding Hydration in React applications(SSR)](https://blog.saeloun.com/2021/12/16/hydration.html)
- [reactwg/react-18/discussions/37](https://github.com/reactwg/react-18/discussions/37) - New Suspense SSR Architecture in React 18.
  - Discusses about SSR, problems with it, Streaming HTML and Selective Hydration.  
- [Octanium91/react-app-ssr](https://github.com/Octanium91/react-app-ssr): SSR integration in a React app (ReactJS: 18, webpack: 5)
