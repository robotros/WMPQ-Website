import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
* React Component to Render NavLinks for WMPQ Gaming
* @author [Aron Roberts](https://github.com/robotros)
*/
class NavLink extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <li className='nav-item'>
        <Link to={this.props.L.path}
          className='nav-link'
          activeClassName='active'>{this.props.L.label}
        </Link>
      </li>
    );
  }
}

NavLink.propTypes = {
  L: PropTypes.object.isRequired,
};

export default NavLink;
