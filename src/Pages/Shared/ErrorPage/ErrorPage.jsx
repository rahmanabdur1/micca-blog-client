import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            Errorpage
            <Link to='/'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;