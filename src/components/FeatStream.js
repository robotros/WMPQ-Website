import React, {Component} from 'react';

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
      <div className='col-md-10 content' id='twitch-embed'></div>
    );
  }
}

export default FeatStream;
