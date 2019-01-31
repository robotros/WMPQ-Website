import React, {Component} from 'react';

/**
* React Component to Render WMPQ About Page
* @author [Aron Roberts](https://github.com/robotros)
*/
class About extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='About container'>
        <h1>About WMPQ</h1>
        <h2>W<small>illpower</small></h2>
        <p>Willpower is nothing but a choice.
          A choice to keep trying regardless of the odds.
          You never really lose until you give up.</p>
        <h2>M<small>otivation</small></h2>
        <p>The ability to Motivate those around you to become the best they possibly can.
          In the end we are all only as good as the person standing next to us.</p>
        <h2>P<small>assion</small></h2>
        <p>You have to truly believe in what you are trying to accomplish.
          Willing to make sacrifices along the way.</p>
        <h2>Q<small>uality</small></h2>
        <p>Quality is a standard of measurement.
          It is important to produce at the highest degree of excellence.</p>
      </div>
    );
  }
}

export default About;
