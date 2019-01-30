import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


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
    // console.log(details);

    return (
      <div className='col-md-3 col-sm-6 mb-4'>
        <h4 >{detail.display_name}</h4>
        <a href={url}>
          <img className='img-fluid feat'
            src={detail.offline_image-url}
            alt={detail.display_name}></img>
        </a>
      </div>
    );
  }
}

Streamer.propTypes = {
  detail: PropTypes.object.isRequired,
  key: PropTypes.string,
};


export default Streamer;
