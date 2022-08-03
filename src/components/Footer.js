import React from 'react';

import LogoDark from '../images/logo-dark.png';
import FooterImage1 from '../images/footer-image1.png';
import FooterImage2 from '../images/footer-image2.png';
import FooterImage3 from '../images/footer-image3.png';
import FooterImage4 from '../images/footer-image4.png';

function Footer() {
  return (
    <div className="footer">
        <div className='footer-top'>
            <div className='row animate__animated animate__fadeInRight animate__delay-4s'>
                <div className='col-3'>
                    <img src={FooterImage1} alt='Footer' width='100%' />
                </div>
                <div className='col-3'>
                    <img src={FooterImage2} alt='Footer' width='100%' />
                </div>
                <div className='col-3'>
                    <img src={FooterImage3} alt='Footer' width='100%' />
                </div>
                <div className='col-3'>
                    <a href='/#'><img src={FooterImage4} alt='Footer' width='100%' /></a>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className='row animate__animated animate__fadeInUp animate__delay-4s'>
                <div className='col-md-3'>
                    <img src={LogoDark} alt='Logo' height='38px' />
                    <p>Keep Up With Our New Releases, Beauty Tips And What Emma's Been Up To.</p>
                    <div className='row'>
                        <div className='col-12'>
                            <a href='/#facebook'><i className='fa fa-facebook'></i></a>
                            <a href='/#instagram'><i className='fa fa-instagram'></i></a>
                            <a href='/#twitter'><i className='fa fa-twitter'></i></a>
                            <a href='/#linkedin'><i className='fa fa-linkedin-square'></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h4>Company</h4>
                            <div className='link-container'><a href='/#' >About</a></div>
                            <div className='link-container'><a href='/#' >Jobs</a></div>
                            <div className='link-container'><a href='/#' >Branding</a></div>
                            <div className='link-container'><a href='/#' >Newsroom</a></div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Resources</h4>
                            <div className='link-container'><a href='/#' >College</a></div>
                            <div className='link-container'><a href='/#' >Support</a></div>
                            <div className='link-container'><a href='/#' >Safety</a></div>
                            <div className='link-container'><a href='/#' >StreamKit</a></div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Terms & Condition</h4>
                            <div className='link-container'><a href='/#' >Policy</a></div>
                            <div className='link-container'><a href='/#' >Faq</a></div>
                            <div className='link-container'><a href='/#' >Return & Delivery</a></div>
                            <div className='link-container'><a href='/#' >Tracking</a></div>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-12 copyright'>
                            <center>
                                <p>Copyright <i className='fa fa-copyright'></i> 2022 Musemind | All rights reserved.</p>
                            </center>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h4>Subscribe</h4>
                    <p style={{paddingTop: '5px'}}>Get 10% off your first order</p>
                    <input type='email' placeholder='Enter your Email' />
                    <button><i className='fa fa-send'></i></button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
