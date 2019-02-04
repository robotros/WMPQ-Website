import React, {Component} from 'react';

/**
* React Component to Render WMPQ Charity Stream
* @author [Aron Roberts](https://github.com/robotros)
*/
class Charity extends Component {
  state ={
    causes: [
      {
        'name': '',
        'details': '',
        'image:': '',
      },
    ],
  }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='Contact container'>
        <h1>Causes WMPQ Support</h1>
        <p>This page is still under construction.
        Our Primary Charity for 2019 is Extra-life.
        More details at www.esports.charity
        </p>
      </div>
    );
  }
}

export default Charity;
