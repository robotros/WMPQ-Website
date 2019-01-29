import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


/**
* React Component to Render a related streamer
* @author [Aron Roberts](https://github.com/robotros)
*/
class Streamer extends Component {
  /**
  * Click event
  */
  locClick = () => {
    this.props.onClick(this.props.details.location_name);
  }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    const details = this.props.details;
    // console.log(details);

    return (
      <div className='col-md-3 col-sm-6 mb-4'>
        <h4 className='feat1'></h4>
        <a id='stream_url_1' href=#>
          <img className='img-fluid feat' id='profile_1_img' src='http://placehold.it/500x300' alt='Name'></img>
        </a>
      </div>
    );
  }
}

Location.propTypes = {
  details: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Streamer;