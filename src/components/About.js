import React, {Component} from 'react';
import controller from '../img/blue-controller-dualshock.png';

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
        <h1 className='text-center'>About <span className='text-danger'>W</span>
          M<span className='text-danger'>P</span>Q Gaming</h1>
        <img src={controller} className='img-fluid img-responsive center-align rounded mx-auto d-block' alt='WMPQ'></img>
        <hr></hr>
        <h2><span className='text-danger'>W</span><small>illpower</small></h2>
        <p>Willpower is nothing but a choice.
          A choice to keep trying regardless of the odds.
          You never really lose until you give up.</p>
        <h2>M<small>otivation</small></h2>
        <p>The ability to Motivate those around you to become the best they possibly can.
          In the end we are all only as good as the person standing next to us.</p>
        <h2><span className='text-danger'>P</span><small>assion</small></h2>
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
