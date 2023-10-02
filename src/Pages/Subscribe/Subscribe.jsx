import React, { useContext } from 'react';
import './Subscribe.css'
import { ThemeContext } from '../../context/ThemeContext';
const Subscribe = () => {
    const { theme} = useContext(ThemeContext);

    return (
        <div className={`subscribe-container ${theme ? 'dark' : ''}`}>
            <div className='sub-text'>
                <h2>Subscribe to our newsletter</h2>
                <p>Get all the latest posts delivered straight to your inbox.</p>
            </div>
            <div className="subscribe-search-input-button">
                <input type="text" className="subscribe-search-input" placeholder="Your email address"/>
             <button className="subscribe-search-button">subscribe</button>
            
            </div>
        </div>
    );
};

export default Subscribe;