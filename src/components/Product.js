import React from 'react';
import Image1 from '../images/p1.png';
import Image2 from '../images/p2.png';
import Image3 from '../images/p3.png';
import Image4 from '../images/p4.png';
import Image5 from '../images/p5.png';

function Product(props) {
  return (
    <div className='product'>
        <center>
            {props.item._id === '1' && <img src={Image1} alt={props.item.name} width='95%' />}
            {props.item._id === '2' && <img src={Image2} alt={props.item.name} width='95%' />}
            {props.item._id === '3' && <img src={Image3} alt={props.item.name} width='95%' />}
            {props.item._id === '4' && <img src={Image4} alt={props.item.name} width='95%' />}
            {props.item._id === '5' && <img src={Image5} alt={props.item.name} width='95%' />}
        </center>
        <div className={`icons ${props.hovered ? '' : ''}`}>
            <div className='lock'>
                <i className='fa fa-lock' style={{color: '#ffffff', fontSize: '15px'}}></i>
            </div>
            <div className='like'>
                <i className='fa fa-heart' style={{color: '#F5683C', fontSize: '15px'}}></i>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <h4>{props.item.name}</h4>
                <p>${props.item.price}</p>
            </div>
        </div>
        
    </div>
  );
}

export default Product;
