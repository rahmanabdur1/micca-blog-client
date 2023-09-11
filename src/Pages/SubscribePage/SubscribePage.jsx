import React from 'react';
import './SubscribePage.css'
const SubscribePage = () => {

    return (
        <div className='subscribe'>
            <div className=''>
                <h2 className='substitle'>Subscribe to our newsletter</h2>
                <p className='subsdes'>Get all the latest posts delivered straight to your inbox.</p>
            </div>
            <input className='subsInput' placeholder='Your email address'/>
        </div>
    );
};

export default SubscribePage;