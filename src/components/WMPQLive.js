import React from 'react';
import axios from 'axios';
import * as TwitchAPI from './TwitchAPI';
import FeatStream from './FeatStream';

// setup Twitch
const Twitch = window.Twitch;

/**
* React Component to Render WMPQ.org home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class WMPQLive extends React.Component {
  state = {
    wmpq_streams: [],
    ids: [],
    streamer_details: [],
    live_streams: [],
    active_streams: [],
  }

  /**
  * embed a twitch stream
  * @param {string} user : name of user to embed
  * @param {string} id : name of user to embed
  */
  embedTwitch = (user, id) => {
    new Twitch.Embed(id, {
      width: '100%',
      height: 400,
      channel: user,
      theme: 'dark',
    });
  }

  /**
  * Embed all Live WMPQ Streams.
  */
  setActiveStreams() {
    let live = this.state.live_streams;
    if (live.length > 0) {
      let streams = [];
      let i = 0;
      let max = live.length;
      while (i<max) {
        let stream = live[i].user_name;
        let id = 'twitch-embed'+i;
        streams.push(id);
        this.setState({ids: streams}, () => {
          this.embedTwitch(stream, id);
        });
        i++;
      }
    }
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
          await this.setState({live_streams: data.data}, this.setActiveStreams);
        });
  }

  /**
  * reload page
  */
  refreshPage() {
    window.location.reload();
  }

  /**
  * Run methods once component has mounted
  */
  componentDidMount() {
    const url = 'http://localhost:80/api/streamers/index.php';
    // const url = '/api/streamers/index.php';
    axios.get(url).then((response) => response.data)
        .then((data) => {
          this.setState({wmpq_streams: data}, ()=> {
            this.getStreamerDetails();
          });
        });
    setTimeout(this.refreshPage, 60*60*1000);
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='live container'>
        <h1><span className='text-danger'>W</span>M<span className='text-danger'>P</span>Q Streaming Now</h1>
        {
          this.state.live_streams.length >0 ? this.state.ids.map((id) =>
            <FeatStream
              key={id}
              id={id}/>
          ) : <h2> No Live Streams Found</h2>}
      </div>
    );
  }
}

export default WMPQLive;
