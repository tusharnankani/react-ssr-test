import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*
 ! Default
 ? Get the tag, create and define that as root.  
 * const root = ReactDOM.createRoot(document.getElementById('root'));
 * root.render(
 * <React.StrictMode>
 *  <App />
 * </React.StrictMode>
);
*/

// ! hydrate(element, container[, callback])
// * Same as render(), but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. 
// * React will attempt to attach event listeners to the existing markup.

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);