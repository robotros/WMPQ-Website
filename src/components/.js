import React from 'react';
import axios from 'axios';
import * as TwitchAPI from './TwitchAPI';
import FeatStream from './FeatStream';
import royaleLogo from '../img/Royale.png';

// setup Twitch
const Twitch = window.Twitch;

/**
* React Component to Render WMPQ.org home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Royale extends React.Component {
  state = {
    royale_streams: [],
    ids: [],
    streamer_details: [],
    live_streams: [],
    active_streams: [],
    max_streams: 10,
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
      let max = live.length < this.state.max_streams ?
        live.length : this.state.max_streams;
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
    await TwitchAPI.getChannels(this.state.royale_streams)
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
    const url = '/api/royale/index.php';
    // const url = 'http://localhost:80/api/royale/index.php';
    // const url = 'http://localhost:8080/api/royale/index.php';
    axios.get(url).then((response) => response.data)
        .then((data) => {
          this.setState({royale_streams: data}, ()=> {
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
      <div className='Home container'>
        <br></br>
        <a href='https://discord.gg/G3Rq5nq'><img src={royaleLogo} alt='Royale Streamers'></img></a>
        <h2>Displaying {this.state.ids.length} Streams</h2>
        <hr></hr>
        {this.state.ids.map((id) =>
          <FeatStream
            key={id}
            id={id}/>
        )}
        <FeatStream
          id='twitch-embed'/>
      </div>
    );
  }
}

export default Royale;
