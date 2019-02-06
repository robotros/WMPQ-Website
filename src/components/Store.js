import React, {Component} from 'react';
import shirt from '../img/FlaashRobot.jpg';
import hoodie from '../img/QuayHoodie.jpg';
import vegas from '../img/enviousvegas.jpg';

/**
* React Component to Render WMPQ Store
* @author [Aron Roberts](https://github.com/robotros)
*/
class Store extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='Store container'>
        <h1>WMPQ Merch</h1>
        <p>This page is still under construction.
          We are currently working with several vendors to bring quality products to our members and supporters.
          Until sourcing is complete you can purchase WMPQ Merchandise from our
          <a href='https://www.designbyhumans.com/shop/WMPQ/?fbclid=IwAR2qiLo6qbzI0XXQ9VM_ZfBRigGLd42FGWDoEFeQoOFAj-8lfxzdcxmPo6E' > Design By Humans store.</a>
        </p>

        <img src={vegas} className='img-responsive img-fluid  img-thumbnail merch' alt='vegas'></img>
        <img src={hoodie} className='img-responsive img-fluid img-thumbnail merch' alt='hoodie'></img>
        <img src={shirt} className='img-responsive img-fluid img-thumbnail merch' alt='shirt'></img>

      </div>
    );
  }
}

export default Store;
