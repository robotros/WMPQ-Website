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
          <Streamer />
        </div>
      </div>
    );
  }
}

OtherStreams.propTypes = {
  details: PropTypes.array.isRequired,
};

export default OtherStreams;
