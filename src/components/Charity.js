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
        'url': 'https://www.extra-life.org/team/56115',
        'details': 'Extra Life unites thousands of gamers around the world to play games in support of their local Children\'s Miracle Network Hospital. Since its inception in 2008, Extra Life has raised more than $50 million for sick and injured kids.',
        'image': 'https://www.chla.org/sites/default/files/thumbnails/image/CHLA-Extra-Life-Transparent-03.png',
      },
      {
        'name': 'Donors Choose',
        'url': 'https://www.donorschoose.org/classroom/roberts24',
        'details': 'Support a classroom. Build a future.Teachers and students all over the U.S. need your help to bring their classroom dreams to life. Get crayons, books, telescopes, field trips, and more for a classroom today',
        'image': 'https://www.donorschoose.org/images/header/donorschoose.png',
      },
      {
        'name': 'PCOS Awareness Association',
        'url': 'https://www.pcosaa.org/',
        'details': 'Polycystic Ovary Syndrome, or PCOS, is a health condition that affects about 10 million people in the world. It is a leading cause of female infertility and is responsible for a number of symptoms that can affect the body physically and emotionally.',
        'image': 'https://static1.squarespace.com/static/54b53631e4b04ebefeb14d13/t/5ddd8eca8dca7851719e2253/1604074750989/?format=1500w',
      },
      {
        'name': '#MakeChesterProud',
        'url': 'https://chester.linkinpark.com/',
        'details': 'In case you or someone you know needs support, here are some resources: Suicide Prevention Lifeline 1-800-273-TALK',
        'image': 'https://i.pinimg.com/originals/19/bc/30/19bc301d756011321013ff0c3e5b930f.jpg',
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
        </p>
        <section className='row'>
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
