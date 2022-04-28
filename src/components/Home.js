/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-console: ["warn", { allow: ["warn", "error"] }] */

import React from 'react';
import * as TwitchAPI from './TwitchAPI';
import Featured from './Featured';
import OtherStreams from './OtherStreams';
import offline from '../img/offline.png';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as env from '../env.js';
import CryptoJS from 'crypto-js';

// setup Twitch
const Twitch = window.Twitch;
const cookies = new Cookies();
// use env.DEV.WMPQ_API_URL for localhost
// use env.PRD.WMPQ_API_URL for PRD env
const API_URL = env.DEV.WMPQ_API_URL;
const SECRET = env.PRD.SECRET;

/**
* React Component to Render WMPQ.org home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Home extends React.Component {
  state = {
    twitch_token: '',
    token_valid: false,
    wmpq_streams: [],
    streamer_details: [],
    live_streams: [],
    active_stream: '',
    related_streams: [],
    default_stream: 'robotros',
    default_image: offline,
    test: [],
  }

  /**
  * embed a twitch stream
  * @param {string} user : name of user to embed
  */
  embedTwitch = (user) => {
    new Twitch.Embed('twitch-embed', {
      width: '100%',
      height: 400,
      channel: user,
      theme: 'dark',
      title: 'Twitch Stream',
      parent: ['wmpq.org', 'www.wmpq.org'],
    });
  }

  /**
  * Select a random Live stream and embed it.
  */
  async setActiveStream() {
    let stream = this.state.default_stream;
    let live = this.state.live_streams;
    (live.length < 1) ? stream = this.state.default_stream :
      stream = live[Math.floor(Math.random() * live.length)].user_name;
    await this.setState({active_stream: stream});
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
    await TwitchAPI.getChannels(this.state.wmpq_streams,
        this.state.twitch_token)
        .then( (data) => {
          this.setState({streamer_details: data.data});
        });
  }

  /**
  * Make TwitchAPI call to get Live streamers
  */
  async getLiveStreams() {
    await TwitchAPI.getLive(this.state.streamer_details)
        .then(async (data) => {
          await this.setState({live_streams: data.data});
        });
  }

  /**
  * Check Token
  */
  async validateTokens() {
    await TwitchAPI.validateToken(this.state.twitch_token).then(
        async (data) => {
          data.expires_in ?
            data.expires_in > 0 ?
              await this.setState({token_valid: true}) :
              await this.setState({token_valid: false}) :
              await this.setState({token_valid: false});
        });
  }

  /**
  * Get new Token
  */
  async getNewToken() {
    await TwitchAPI.getToken().then((data) => {
      this.setState({twitch_token: data.access_token});
      let encryptedToken = CryptoJS.AES.encrypt(data.access_token, SECRET)
          .toString();
      cookies.set('twitch_token', encryptedToken, {path: '/'});
    });
  }

  /**
  * get wmpq info
  */
  async getWMPQUsers() {
    await axios.get(API_URL).then((response) => response.data)
        .then((data) => {
          this.setState({wmpq_streams: data});
        });
  }
  /**
  * test
  */
  async getCookies() {
    let encryptedToken = cookies.get('twitch_token');
    let tokenByte = encryptedToken ? CryptoJS.AES.decrypt(encryptedToken, SECRET) : '';
    let decryptedToken= tokenByte.toString(CryptoJS.enc.Utf8);
    await this.setState({twitch_token: decryptedToken});
  }

  /**
  * build main content
  */
  async main() {
    // retrieve twitch token from stored cookie

    await this.getCookies();
    // get Twitch API access Token
    await this.validateTokens();
    if (this.state.token_valid !== true) {
      console.warn('getting new token for Twitch');
      await this.getNewToken();
    }
    await this.getWMPQUsers();
    await this.getStreamerDetails();
    await this.getLiveStreams();
    this.setActiveStream();
    this.setRelatedStreams();
  }

  /**
  * Run methods once component has mounted
  */
  componentDidMount() {
    this.main();
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='Home container'>
        <Featured
          active={this.state.active_stream}
          details={this.state.streamer_details.filter(
              (channel) =>
                channel.login.toLowerCase() ===
                this.state.active_stream.toLowerCase())}
          desc={this.state.live_streams.filter(
              (channel) =>
                channel.user_name.toLowerCase() ===
                this.state.active_stream.toLowerCase())[0]}
        />
        <OtherStreams
          details={this.state.related_streams}
          default_image={this.state.default_image}
          live={this.state.live_streams}
        />
      </div>
    );
  }
}

export default Home;
