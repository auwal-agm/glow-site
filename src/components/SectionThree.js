import React from 'react';

import useWindowDimensions from './useWindowDimensions';
import LadyFace from '../images/lady3.png';

function SectionThree() {
    const { width } = useWindowDimensions();

    return (
        <div className="section-three">
            <div className='row'>
                <div className='col-9 section-three-left' style={{width: width-300,}}>
                    <h2>We make going <br />all natural <span>Beauty</span>.</h2>
                    <p>Made with nature's best ingredients - our products' transparent <br />ingredient lists allow you to know.</p>
                    <div className='row animate__animated animate__fadeInUp animate__delay-4s'>
                        <div className='col-3' style={{width: '180px'}}>
                            <div className='badge-even'>
                                <div className='title'>Product<br />Users</div>
                                <div className='quantity'>7M+</div>
                            </div>
                        </div>
                        <div className='col-3' style={{width: '180px'}}>
                            <div className='badge-odd'>
                                <div className='title'>Brand<br />Product</div>
                                <div className='quantity'>99+</div>
                            </div>
                        </div>
                        <div className='col-3' style={{width: '180px'}}>
                            <div className='badge-even'>
                                <div className='title'>Product<br />Reviews</div>
                                <div className='quantity'>5M</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3 section-three-right animate__animated animate__zoomIn animate__delay-4s'  style={{width: 300,}}>
                    <img src={LadyFace} alt="Product" width="100%" />
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
