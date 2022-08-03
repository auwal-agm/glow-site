import React, {useState} from 'react';

import Product2 from '../images/product2.png';

const questions = [
    {_id: '1', question: 'Where are products made?', answer: 'Many brands, especially in period care, carry products that take centuries to biodegrade with pronouce.'},
    {_id: '2', question: 'How to Purchase our prouduct?', answer: 'Many brands, especially in period care, carry products that take centuries to biodegrade with pronouce.'},
    {_id: '3', question: 'How to Purchase our Product?', answer: 'Many brands, especially in period care, carry products that take centuries to biodegrade with pronouce.'}
];

function SectionFour() {
    const [currentQuestion, setCurrentQuestion] = useState('1');
    const handleOpen = (id) => {
        if(id === currentQuestion){
            setCurrentQuestion('0');
        } else {
            setCurrentQuestion(id);
        }
    }
    return (
        <div className="section-four">
            <div className='row'>
                <div className='col-md-6'>
                    <center>
                        <img src={Product2} alt='Product' width='70%' className='animate__animated animate__zoomIn animate__delay-4s' />
                    </center>
                </div>
                <div className='col-md-6'>
                    <div className='animate__animated animate__fadeInUp animate__delay-4s'>
                        <h2>You have <span>questions,</span><br />we have answers.</h2>
                        <div style={{borderTop: '1px solid gray', marginTop: 30}}></div>
                        {
                            questions.map(item => (
                                <div key={item._id} className='question' onClick={() => handleOpen(item._id)}>
                                    <div className='row'>
                                        <div className='col-10'>
                                            <h4>{item.question}</h4>
                                        </div>
                                        <div className='col-2 button'>
                                            {
                                                currentQuestion === item._id ? <i className='fa fa-minus'></i> : <i className='fa fa-plus'></i>
                                            }
                                        </div>
                                    </div>
                                    <p style={{display: `${currentQuestion === item._id ? 'block' : 'none'}`}}>{item.answer}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
