import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render Active Stream Details
* @author [Aron Roberts](https://github.com/robotros)
*/
class Details extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='col-md-2 infor'>
        <h3 className='my-3'>Stream Description</h3>
        <img className='image-responsive'
          alt={this.props.details.display_name}
          height='20%'
          src='{this.props.active_stream.profile_image_url}'></img>
        <p className='description'>{this.props.details.description}</p>
      </div>
    );
  }
}

Details.propTypes = {
  details: PropTypes.array.isRequired,
};

export default Details;
