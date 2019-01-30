import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FeatStream from './FeatStream';
import StreamDetails from './StreamDetails';

/**
* React Component to Render Active Stream Details
* @author [Aron Roberts](https://github.com/robotros)
*/
class Featured extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div clasName='content'>
        <h1 className='my-4'>[WMPQ]
          <small className='user_id'>{this.props.active_stream.user_id}</small>
        </h1>
        <div className='row'>
          <FeatStream />
          <StreamDetails
            details={this.props.details}
          />
        </div>
      </div>
    );
  }
}

Featured.propTypes = {
  details: PropTypes.array.isRequired,
  active_stream: PropTypes.Object.isRequired,
};

export default Featured;
