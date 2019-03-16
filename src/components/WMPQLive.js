import React from 'react';
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
      'mrborn2kil',
      'virtuallycanadian',
      'DvDplaya1',
      'jamerk_here',
    ],
    ids: [
      'twitch-embed1',
      'twitch-embed2',
      'twitch-embed3',
      'twitch-embed4',
      'twitch-embed5',
      'twitch-embed6',
      'twitch-embed7',
      'twitch-embed8',
      'twitch-embed9',
      'twitch-embed10',
    ],
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
  * Select a random Live stream and embed it.
  */
  setActiveStreams() {
    let live = this.state.live_streams;
    if (live.length > 0) {
      let streams = [];
      let i=0;
      while (i<live.length) {
        let stream=live[i].user_name;
        this.embedTwitch(stream, this.state.ids[i]);
        streams.push(stream);
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
  refreshPage(){
    window.location.reload()
  }

  /**
  * Start polling Twitch API
  */
  pollTwitch() {
    setInterval(this.getStreamerDetails(), 60*60*1000);
    setTimeout(this.refreshPage, 60*60*1000);
  }

  /**
  * Run methods once component has mounted
  */
  componentDidMount() {
    this.pollTwitch();
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='Home container'>
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
