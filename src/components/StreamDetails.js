import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render Active Stream Details
* @author [Aron Roberts](https://github.com/robotros)
*/
class StreamDetails extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    let info = this.props.details.length > 0 ? this.props.details[0] :
      {'display_name': 'none', 'description': 'no stream available'};

    return (
      <div className='col-md-4 col-sm-6 infor'>
        <h2 className='my-3 text-center'>About Streamer</h2>
        <img className='feat image-responsive rounded mx-auto d-block'
          alt={info.display_name}
          height='20%'
          src={info.profile_image_url}></img>
        <hr></hr>
        <p className='description text-justify'>{info.description.trim()}</p>
      </div>
    );
  }
}

StreamDetails.propTypes = {
  details: PropTypes.array.isRequired,
  desc: PropTypes.object,
};

export default StreamDetails;
