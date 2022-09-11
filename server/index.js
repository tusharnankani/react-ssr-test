import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {

    // ! ReactDOMServer’s renderToString is used to render the app to a static HTML string.
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./build/index.html');
  
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }
        
        // ! The static index.html file from the built client app is read. 
        // ! The app’s static content is injected into the <div> with an id of "root". This is sent as a response to the request.
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});
  
// ! Express is used to serve contents from the build directory as static files.
app.use(express.static('./build'));
  
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});