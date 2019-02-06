import React, {Component} from 'react';
import Cause from './Cause';
/**
* React Component to Render WMPQ Charity Stream
* @author [Aron Roberts](https://github.com/robotros)
*/
class Charity extends Component {
  state ={
    causes: [
      {
        'name': 'Extra-Life',
        'url': 'https://www.extra-life.org/team/44002',
        'details': 'Extra Life unites thousands of gamers around the world to play games in support of their local Children\'s Miracle Network Hospital. Since its inception in 2008, Extra Life has raised more than $50 million for sick and injured kids.',
        'image': 'https://www.chla.org/sites/default/files/thumbnails/image/CHLA-Extra-Life-Transparent-03.png',
      },
      {
        'name': 'Donors Choose',
        'url': 'https://www.donorschoose.org/',
        'details': 'Support a classroom. Build a future.Teachers and students all over the U.S. need your help to bring their classroom dreams to life. Get crayons, books, telescopes, field trips, and more for a classroom today',
        'image': 'https://cdn.donorschoose.net/images/logo/dc-logo.png',
      },
      {
        'name': 'Video Game Voters Network',
        'url': 'https://videogamevoters.org/',
        'details': 'For nearly 10 years, the Video Game Voters Network (VGVN) has been a place for American gamers to organize and defend against threats to video games. We know that without a critical mass of adult video gamers who are registered to vote and willing to stand firmly behind the games they love, politicians will continue to fire criticism at video games and gamers in order to score easy points for their political campaigns.',
        'image': 'https://videogamevoters.org/assets/images/logo.png',
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
        <h1><span className='text-danger'>W</span>M<span className='text-danger'>P</span>Q Supports </h1>
        <p>Part of the goal of WMPQ is for our members to have a positive impact on the world we live in.
        The <span className='text-danger'>W</span>illpower to commit to a cause can be a struggle.
        In order to Motivate our members, WMPQ has put together a list of Quality causes that we encourage our members to be <span className='text-danger'>P</span>assionate about.
        More details at www.esports.charity
        </p>
        <section>
          {this.state.causes.map((C) =>
            <Cause
              key={C.url}
              C={C}
            />
          )}
        </section>
      </div>
    );
  }
}

export default Charity;
