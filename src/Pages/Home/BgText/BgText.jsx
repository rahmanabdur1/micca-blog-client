import React, { useContext } from 'react';
import './BgText.css'
import { ThemeContext } from '../../../context/ThemeContext';

const BgText = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={`bg ${theme ? 'dark' : ''}`}>
            <h1>This is Micca.<span>  A blog that covers productivity, tips, inspiration, and strategies for massive profits.</span> </h1>
        </div>
    );
};

export default BgText;