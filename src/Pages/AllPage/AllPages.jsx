import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './AllPage.css'
import { ThemeContext } from '../../context/ThemeContext';
import useTitle from '../../hook/useTitle';

const AllPages = () => {
    const { theme } = useContext(ThemeContext);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useTitle("all-pages");

    return (
        <div className={`pages-container ${theme ? 'dark' : ''}`} onClick={scrollToTop}>
            <Link to='/'>Home</Link>
            <Link to='/author'>Authors</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/style'>Style Guide</Link>
        </div>
    );
};

export default AllPages;