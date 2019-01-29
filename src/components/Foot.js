import React, {Component} from 'react';

/**
* React Component to Render footer for WMPQ Gaming
* @author [Aron Roberts](https://github.com/robotros)
*/
class Foot extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <footer className='py-5 bg-dark'>
        <div className='container'>
          <p className='m-0 text-center text-white'>
            Copyright &copy; WMPQ Gaming 2018
          </p>
        </div>
      </footer>
    );
  }
}

export default Foot;
