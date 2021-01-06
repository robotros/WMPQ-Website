import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render a related streamer
* @author [Aron Roberts](https://github.com/robotros)
*/
class Streamer extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    const detail = this.props.detail;
    let url = 'https://www.twitch.tv/'+detail.login;
    let image = this.props.live ?
      this.props.live.thumbnail_url.replace(/ *\{[^)]*\} */g, '500x300') :
        (detail.offline_image_url==='') ? this.props.default_image :
          detail.offline_image_url;

    return (
      <div className='col-md-3 col-sm-6 mb-4'>
        <h3 >{detail.display_name}</h3>
        <a href={url}>
          <img className='img-fluid img-thumbnail feat'
            src={image}
            alt={detail.display_name}></img>
        </a>
      </div>
    );
  }
}

Streamer.propTypes = {
  detail: PropTypes.object.isRequired,
  default_image: PropTypes.string.isRequired,
  live: PropTypes.object,
};

export default Streamer;
