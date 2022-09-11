const path = require('path');
const nodeExternals = require('webpack-node-externals');

// ! creating a webpack config for the server that uses Babel Loader to transpile the code. 

module.exports = {
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};

/**
 * With this configuration, the transpiled server bundle will be output to the server-build folder in a file called index.js.
 * 
 * Note the use of target: 'node' and externals: [nodeExternals()] from webpack-node-externals; 
 * which will omit the files from node_modules in the bundle; the server can access these files directly.
 * 
 * This completes the dependency installation and webpack and Babel configuration.
 */