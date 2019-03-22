import React from 'react';
import Papa from 'papaparse';
import * as TwitchAPI from './TwitchAPI';
import FeatStream from './FeatStream';
import csvFile from '../data/wmpq.csv';

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
  * read csv
  */
  readCsv() {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        this.setState(
            {wmpq_streams: results.data},
            () => {
              this.getStreamerDetails();
            }
        );
      },
    });
  }

  /**
  * Embed all Live WMPQ Streams.
  */
  setActiveStreams() {
    let live = this.state.live_streams;
    if (live.length > 0) {
      let streams = [];
      let i=0;
      let max = live.length;
      while (i<max) {
        let stream = live[i].user_name;
        let id = 'twitch-embed'+i;
        this.embedTwitch(stream, id);
        streams.push(id);
        i++;
      }
      this.setState({ids: streams});
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
    console.log(this.state.streamer_details);
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
    this.readCsv();
    setTimeout(this.refreshPage, 60*60*1000);
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
