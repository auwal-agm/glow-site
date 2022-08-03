import React from 'react';

import LogoLight from '../images/logo-light.png';

function Header() {
  return (
    <div className="header">
        <div className='header-logo-div animate__animated animate__rotateInUpRight'>
            <a href='/'>
                <img src={LogoLight} alt="Logo" height="48px" />
            </a>
        </div>
        <div className='header-menu-div'>
            <ul>
                <li className='menu'>Product</li>
                <li className='menu'>About</li>
                <li className='menu'>Blog</li>
                <li className='menu'>Reviews</li>
                <li>
                    <div className='cart-quantity'>1</div>
                    <div className='cart'>
                        <i className='fa fa-lock' style={{color: '#ffffff', fontSize: '15px'}}></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
