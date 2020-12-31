import React from 'react';
import * as TwitchAPI from './TwitchAPI';
import Featured from './Featured';
import OtherStreams from './OtherStreams';
import offline from '../img/offline.png';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as env from '../env.js';
// import {withCookies, Cookies} from 'react-cookie';
// import env from 'react-dotenv';

// setup Twitch
const Twitch = window.Twitch;
const cookies = new Cookies();

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
    await TwitchAPI.getChannels(this.state.wmpq_streams, this.state.twitch_token)
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
    console.warn(this.state.token_valid);
  }

  /**
  * Get new Token
  */
  async getNewToken() {
    this.state.token_valid ? console.warn('token valid') :
    await TwitchAPI.getToken().then((data) => {
      this.setState({twitch_token: data.access_token});
      cookies.set('Ttoken', data.access_token, {path: '/'});
    });
  }


  /**
  * Run methods once component has mounted
  */
  async componentDidMount() {
    await this.setState({twitch_token: cookies.get('Ttoken')});
    // get Twitch API access Token
    await this.validateTokens();
    await this.getNewToken();
    // API URL for DEV ENV
    // const url = env.REACT_DEV_API_URL;
    // API URL for PRD ENV
    const url = env.PRD.REACT_WMPQ_API_URL;
    axios.get(url).then((response) => response.data)
        .then((data) => {
          this.setState({wmpq_streams: data}, ()=> {
            this.getStreamerDetails();
          });
        });
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
