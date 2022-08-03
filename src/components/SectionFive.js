import React, {useState} from 'react';

import useWindowDimensions from './useWindowDimensions';
import JaneCooper from '../images/lady.png';
import JohnDue from '../images/john-due.png';
import MichaelJohn from '../images/michael-john.png';
import Partner1 from '../images/partners1.png';
import Partner2 from '../images/partners2.png';
import Partner3 from '../images/partners3.png';
import Partner4 from '../images/partners4.png';
import Partner5 from '../images/partners5.png';

const reviews = [
                {description: 'Lorem Lorem is a text for dummy website Lorem Lorem is a text for dummy website Lorem Lorem.', name: 'John Due', location: 'Lagos, Nigeria'},
                {description: 'The UK jewellery awards is an event we always look forward to and we are so honoured to be recognised.', name: 'Jane Cooper', location: 'Naperville, USA'},
                {description: 'The UK jewellery awards is an event we always look forward to and we are so honoured to be recognised.', name: 'Michael John', location: 'Accra, Ghana'}
                ];

function SectionFive() {
    const { width } = useWindowDimensions();
    const [active, setActive] = useState(2);

    return (
        <div className="section-five">
            <div className='row  animate__animated animate__zoomIn animate__delay-4s'>
                <div className='col-9 section-five-left' style={{width: width-350,}}>
                    <div className='content' style={{width: width - 365 - (0.05 * width)}}>
                        <i className='fa fa-quote-left' style={{color: '#F6866A', fontSize: 48}}></i>
                        <h3>{reviews[active-1].description}</h3>
                        <br />
                        <br />
                        <h5>{reviews[active-1].name}</h5>
                        <div className='row'>
                            <div className='col-10'>
                                <p>{reviews[active-1].location}</p>
                            </div>
                            <div className='col-2'>
                                <button onClick={() => setActive(1)} className='slide-button' style={{background: active === 1 ? '#F5683C' : '#FFFFFF'}}></button>
                                <button onClick={() => setActive(2)} className='slide-button' style={{background: active === 2 ? '#F5683C' : '#FFFFFF'}}></button>
                                <button onClick={() => setActive(3)} className='slide-button' style={{background: active === 3 ? '#F5683C' : '#FFFFFF'}}></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3 section-five-right' style={{width: 300,}}>
                    {active === 1 && <img src={JohnDue} alt="Product" width='100%' height='100%' />}
                    {active === 2 && <img src={JaneCooper} alt="Product" width='100%' height='100%' />}
                    {active === 3 && <img src={MichaelJohn} alt="Product" width='100%' height='100%' />}
                </div>
            </div>
            <div className='partners animate__animated animate__zoomIn animate__delay-4s'>
                <img src={Partner1} alt="Parterner1" height='49px' />
                <img src={Partner2} alt="Parterner2" height='38px' />
                <img src={Partner3} alt="Parterner3" height='53px' />
                <img src={Partner4} alt="Parterner4" height='43px' />
                <img src={Partner5} alt="Parterner5" height='43px' />
            </div>
        </div>
    );
}

export default SectionFive;
