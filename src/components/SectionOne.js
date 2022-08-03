import React from 'react';

import Button from './Button';
import useWindowDimensions from './useWindowDimensions';

import Lady from '../images/lady.png';
import LadyIcon from '../images/lady-icon.png';
import ProductHome from '../images/product.jpeg';
import Play from '../images/play.png';
import Circle from '../images/circle.png';
import Star from '../images/star.jpeg';

function SectionOne() {
    const { width } = useWindowDimensions();

  return (
    <div className="section-one">
        <div className='banner'>
            <div className='row'>
                <div className='col-md-6 left animate__animated animate__fadeInUp'>
                    <h1 className='mt-4 pt-4'>Let Your Skin</h1> {/*animate__animated animate__fadeInUpBig animate__delay-1s*/}
                    <h1 className=''>Going <span><img src={LadyIcon} alt="Lady" height='75px' /></span> Out.</h1>
                    <p className=''>We want to bring to the world through our <br />products that very special feeling joy, healthy and <br />positive energy.</p>
                    <span className=''>
                        <Button text='Shop Now' type='fill' />
                        <Button text='How to use' type='translucent' />
                    </span>
                </div>
                <div className='col-md-6 right'>
                    <img src={Lady} alt="Lady" width='80%' className='animate__animated animate__fadeInUp' />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-4 left-div animate__animated animate__zoomIn animate__delay-2s' style={{width: 300,}}>
                <img src={Circle} alt="Circle" width="106px" className='circle' />
                <img src={ProductHome} alt="Product" width="100%" />
            </div>
            <div className='col-8 right-div' style={{width: width-300,}}>
                <img src={Star} alt="Star" width="100px" className='star animate__animated animate__flip' />
                <img src={Play} alt="Play" width={width * 0.15} className='play' />
                <div className='row pt-5 animate__animated animate__fadeInDown animate__delay-2s'>
                    <div className='col-8 offset-2 mt-5 pt-5 animate__animated animate__fadeInUp animate__delay-2s'>
                        <div className='col-12'>
                            <h2 className=''>The self care brand that's <br />setting a new <span>standard <br />Clean</span> products.</h2>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <h4>Where are products made?</h4>
                                <p>Many brands, especially in period care, carry products that take centuries.</p>
                            </div>
                            <div className='col-1'></div>
                            <div className='col-5'>
                                <h4>Where are products made?</h4>
                                <p>Many brands, especially in period care, carry products that take centuries.</p>
                            </div>
                            <div className='col-1'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SectionOne;
