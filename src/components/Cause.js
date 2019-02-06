import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render Charitable Cause
* @author [Aron Roberts](https://github.com/robotros)
*/
class Cause extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div>
        <h2>{this.props.C.name}</h2>
        <a href={this.props.C.url}>
          <img className='img-fluid img-charity'
            src={this.props.C.image}
            alt={this.props.C.name}>
          </img>
        </a>
        <br></br><br></br>
        <p>{this.props.C.details}</p>
        <hr></hr>
      </div>
    );
  }
}

Cause.propTypes = {
  C: PropTypes.object.isRequired,
};

export default Cause;
