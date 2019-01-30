import React, {Component} from 'react';
import Streamer from './Streamer';
import PropTypes from 'prop-types';

/**
* React Component to Render a Shelf
* @author [Aron Roberts](https://github.com/robotros)
*/
class OtherStreams extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='related'>
        <h3 className='my-4'>Other Streamers</h3>
        <div className='row'>
          {this.props.details.map((stream) =>
            <Streamer
              key={stream.id}
              detail={stream}
              default_image={this.props.default_image}
              live ={this.props.live.filter(
                  (channel) => channel.user_name === stream.display_name)[0]}
            />)}
        </div>
      </div>
    );
  }
}

OtherStreams.propTypes = {
  details: PropTypes.array.isRequired,
  default_image: PropTypes.string.isRequired,
  live: PropTypes.array.isRequired,
};

export default OtherStreams;
