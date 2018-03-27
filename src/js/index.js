/**
 * To render the app component in the page, it will the element present and render the component
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

let elmHome = document.getElementById("home");
if(!!elmHome){
    ReactDOM.render(<App />, elmHome);
}
