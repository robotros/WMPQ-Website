import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render Embeded Stream
* @author [Aron Roberts](https://github.com/robotros)
*/
class FeatStream extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='col-md-10 content' id={this.props.id}></div>
    );
  }
}

FeatStream.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FeatStream;
