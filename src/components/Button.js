import React from 'react';

function Button(props) {
    console.log(props);
  return (
    <button className={`button-${props.type}`}>
        {props.type === 'translucent' && <i className='fa fa-play'></i>} {props.text} {props.type !== 'translucent' && <i className='fa fa-arrow-right'></i>}
    </button>
  );
}

export default Button;
