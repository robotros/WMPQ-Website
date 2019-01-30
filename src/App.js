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
import './css/app.css';

// font awesome icon library
library.add(faBars, faTree, faMapMarked, faWifi, faLeaf, faPaintBrush);

// setup Twitch
const Twitch = window.Twitch;

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
    active_stream: '',
    related_streams: [],
    default_stream: 'robotros',
    default_image: 'http://placehold.it/500x300',
  }

  /**
  * embed a twitch stream
  * @param {string} user : name of user to embed
  */
  embedTwitch = (user) => {
    new Twitch.Embed('twitch-embed', {
      width: 854,
      height: 480,
      channel: user,
      theme: 'dark',
    });
  }

  /**
  * Select a random Live stream and embed it.
  */
  setActiveStream() {
    let stream = this.state.default_stream;
    let live = this.state.live_streams;
    (live.length < 1) ? stream = this.state.default_stream :
      stream = live[Math.floor(Math.random() * live.length)].user_name;
    this.setState({active_stream: stream}, this.setRelatedStreams);
    this.embedTwitch(stream);
  }

  /**
  * Select related streams to feature
  */
  setRelatedStreams() {
    let related = [];
    let streamers = this.state.streamer_details;
    let i = streamers.length > 3 ? 0 :
      streamers.length > 0 ? 4-streamers.length : 4;
    while (i < 4) {
      let stream = streamers[Math.floor(Math.random()* streamers.length)];
      if (related.filter((e) => e.id === stream.id).length < 1) {
        related.push(stream);
        i++;
      }
    }

    this.setState({related_streams: related});
  }

  /**
  * Make TwitchAPI call to get streamer information
  */
  async getStreamerDetails() {
    await TwitchAPI.getChannels(this.state.wmpq_streams)
        .then( (data) => {
          this.setState({streamer_details: data.data}, this.getLiveStreams);
        });
  }

  /**
  * Make TwitchAPI call to get Live streamers
  */
  async getLiveStreams() {
    await TwitchAPI.getLive(this.state.streamer_details)
        .then(async (data) => {
          await this.setState({live_streams: data.data}, this.setActiveStream);
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
            <div className='container'>
              <Featured
                active={this.state.active_stream}
                details={this.state.streamer_details.filter(
                    (channel) => channel.login === this.state.active_stream)}
                desc={this.state.live_streams.filter(
                    (channel) => channel.user_name === this.state.active_stream)[0]}
              />
              <OtherStreams
                details={this.state.related_streams}
                default_image={this.state.default_image}
                live={this.state.live_streams}
              />
            </div>
            <Foot />
          </div>
        )}/>
      </main>
    );
  }
}

export default WMPQApp;
