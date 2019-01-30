import React, {Component} from 'react';
import logo from '../img/WMPQ-gaming-logo-03_brand.png';
import NavLink from './NavLink';
import PropTypes from 'prop-types';

/**
* React Component to Render footer for WMPQ Gaming
* @author [Aron Roberts](https://github.com/robotros)
*/
class Head extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
          <div className='container'>
            <div className='navbar-brand'>
              <img src={logo} alt='WMPQ'></img>
            </div>
            <button className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarResponsive'
              aria-controls='navbarResponsive'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                {this.props.Nav.map((L) =>
                  <NavLink
                    key={L.path}
                    L={L}
                  />)}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Head.propTypes = {
  Nav: PropTypes.array.isRequired,
};

export default Head;
