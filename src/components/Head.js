import React, {Component} from 'react';

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
          <nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
            <div class='container'>
              <a class='navbar-brand' href='#'>
                <img src='../img/WMPQ-gaming-logo-03_brand.png'>
              </a>
              <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarResponsive'>
                <ul class='navbar-nav ml-auto'>
                  <li class='nav-item active'>
                    <a class='nav-link' href='#'>Home
                      <span class='sr-only'>(current)</span>
                    </a>
                </ul>
              </div>
            </div>
          </nav>
      </header>
    );
  }
}

export default Head;
