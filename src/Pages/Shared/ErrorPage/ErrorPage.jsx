import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'


const ErrorPage = () => {
    return (
        <div className='errorpage'>
            <h2>Not found this route</h2>
            <Link to='/'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;