import React from 'react';

import Button from './Button';
import Product from './Product';

const products = [
    {_id: '1', name: 'Shower Butter', image: 'p1.png', price: 190.99},
    {_id: '2', name: 'Luxury Oil Gel', image: 'p2.png', price: 190.99},
    {_id: '3', name: 'Body Oil', image: 'p3.png', price: 190.99},
    {_id: '4', name: 'Sunrise Shampoo', image: 'p4.png', price: 190.99},
    {_id: '5', name: 'Luxury Oil Gel', image: 'p5.png', price: 190.99}
];

function SectionTwo() {
  return (
    <div className="section-two">
        <div className='row'>
            <div className='col-md-4 animate__animated animate__fadeInTopLeft animate__delay-3s'>
                <h2>Trending On <br /><span>Essentials</span></h2>
                <p>Made with nature's best ingredients - our products' transparent ingredient. Fear of God Essentials.</p>
                <Button text='Browse All Products' type='transparent' />
            </div>
            {
                products.map(item => (
                    <div key={item._id} className='col-md-4 animate__animated animate__fadeInTopRight animate__delay-3s'>
                        <Product item={item} hovered={item._id === '2'} />
                    </div>
                ))
            }
            
        </div>
    </div>
  );
}

export default SectionTwo;
