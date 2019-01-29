import React from 'react';
import {Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faTree, faMapMarked, faWifi, faLeaf, faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import * as TwitchAPI from './components/TwitchAPI';
import Head from './components/Head';
import Featured from './components/Featured';
import OtherStreams from './components/OtherStreams';
import Foot from './components/Foot';
import './css/App.css';

// font awesome icon library
library.add(faBars, faTree, faMapMarked, faWifi, faLeaf, faPaintBrush);

/**
* React Component to Render WMPQ.org Website
* @author [Aron Roberts](https://github.com/robotros)
*/
class WMPQApp extends React.Component {
  state = {
    wmpq_streams: ['robotros',
      'triedge_wmpq',
      'CarmineCarnage',
      'topher269',
      'kosmiic_',
      'flaash15',
      'firebird2270',
      'draco18772',
      'protomansp25',
      'leroyalgaming',
      'pastaf4r1an',
    ],
    streamer_details: [],
    live_streams: [],
  }

  /**
  * Make TwitchAPI call to get streamer information
  */
  getStreamerDetails() {
    TwitchAPI.getChannels(this.state.wmpq_streams)
        .then((data) => {
          this.setState({streamer_details: data.data});
        });
  }

  /**
  * Make TwitchAPI call to get Live streamers
  */
  getLiveStreams() {
    TwitchAPI.getLive(this.state.streamer_details)
        .then((data) => {
          this.setState({live_streams: data.data});
        });
  }

  /**
  * Run methods once component has mounted
  */
  componentDidMount() {
    this.getStreamerDetails();
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <main className='app'>
        <Route exact path='/' render={()=> (
          <div className='WMPQ-App'>
            <Head />
            <Featured
              live={this.state.live_streams}
              details={this.state.streamer_details}
            />
            <OtherStreams
              details={this.state.streamer_details}
            />
            <Foot />
          </div>
        )}/>
      </main>
    );
  }
}

export default WMPQApp;
