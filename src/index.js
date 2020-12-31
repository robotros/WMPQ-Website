import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import {CookiesProvider} from 'react-cookie';
import App from './App';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
