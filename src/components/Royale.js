import React from 'react';
import * as TwitchAPI from './TwitchAPI';
import FeatStream from './FeatStream';

// setup Twitch
const Twitch = window.Twitch;

/**
* React Component to Render WMPQ.org home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Royale extends React.Component {
  state = {
    royale_streams: [
      '8BBattle',
      'BrAshPop',
      'Captain_Cab1net',
      'DeoxysA',
      'Earlswood',
      'Nicko1117',
      'imbeergoggles',
      '0_DoubleZero_0',
      'AapaSauce',
      'Armageddon',
      'Bax_CD',
      'BigtimeRob',
      'BlackLion_22',
      'CrazeG4',
      'derp_',
      'DissernTV',
      'DrLucianoJr',
      'EternalKingLive',
      'Hadouless',
      'Heavens_WingTV',
      'itzBrittney',
      'jesstreams',
      'Jwaitt86',
      'Kayslayz',
      'KeepitSour',
      'LastKardax',
      'LeoWurf',
      'MisterSkids',
      'MuklukTwitch',
      'mxneymitxh',
      'N3rdRag3_',
      'Naxant',
      'OmegaValeron',
      'PrismaticHub',
      'Pulse35',
      'SillyNetwork',
      'smonme',
      'tbgxmurder',
      'teambrianlee',
      'TheKayJ',
      'TheSavagePack',
      'TheShazammman',
      'Thumper0069',
      'Tiliey',
      'Timotor9001',
      'Vesi',
      'Wizurd_Merlin',
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
      let max = live.length < this.state.ids.length ? live.length : this.state.ids.length;
      while (i<max) {
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
    this.getStreamerDetails();
    setTimeout(this.refreshPage, 60*60*1000);
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='Home container'>
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
