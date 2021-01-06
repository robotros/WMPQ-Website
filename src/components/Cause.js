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
      <div className='col-md-5 charitable-cause border rounded border-primary"' >
        <a href={this.props.C.url}>
          <img className='img-fluid img-charity'
            src={this.props.C.image}
            alt={this.props.C.name}>
          </img>
        </a>
        <hr></hr>
        <h2>{this.props.C.name}</h2>
        <p>{this.props.C.details}</p>
      </div>
    );
  }
}

Cause.propTypes = {
  C: PropTypes.object.isRequired,
};

export default Cause;
