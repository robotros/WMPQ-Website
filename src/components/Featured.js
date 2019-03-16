import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FeatStream from './FeatStream';
import StreamDetails from './StreamDetails';

/**
* React Component to Render Active Stream and Details
* @author [Aron Roberts](https://github.com/robotros)
*/
class Featured extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div>
        <h1 className='my-4'>[<span className='text-danger'>W</span>M<span className='text-danger'>P</span>Q] <small className='user_id'>{this.props.active}</small>
        </h1>
        <div className='row'>
          <FeatStream
            id='twitch-embed'/>
          <StreamDetails
            details={this.props.details}
            desc={this.props.desc}
          />
        </div>
      </div>
    );
  }
}

Featured.propTypes = {
  details: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  desc: PropTypes.object,
};

export default Featured;
