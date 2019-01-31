/**
* filename: App.js
* Main component to render WMPQ Gaming Webpage
*
* Author:[Aron Roberts](github.com/robotros)
* Last Update: 01/30/2019
*/
import React from 'react';
import {Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopyright, faFlagUsa} from '@fortawesome/free-solid-svg-icons';
import Head from './components/Head';
import Foot from './components/Foot';
import Home from './components/Home';
import Contact from './components/Contact';
import Charity from './components/Charity';
import Store from './components/Store';
import About from './components/About';
import './css/app.css';


// font awesome icon library
library.add(faCopyright, faFlagUsa);

/**
* React Component to Render WMPQ.org Website
* @author [Aron Roberts](https://github.com/robotros)
*/
class WMPQApp extends React.Component {
  state = {
    Nav: [
      {
        'path': '/',
        'label': 'Home',
        'component': Home,
      },
      {
        'path': '/about',
        'label': 'About',
        'component': About,
      },
      {
        'path': '/contact',
        'label': 'Contact',
        'component': Contact,
      },
      {
        'path': '/charity',
        'label': 'Charity',
        'component': Charity,
      },
      {
        'path': '/store',
        'label': 'Store',
        'component': Store,
      },
    ],
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <main className='app'>
        <Head Nav={this.state.Nav}/>
        <div className='center'>
          {this.state.Nav.map((page) =>
            <Route
              key={page.label}
              exact path={page.path}
              component={page.component}
            />
          )}
        </div>
        <Foot />
      </main>
    );
  }
}

export default WMPQApp;
