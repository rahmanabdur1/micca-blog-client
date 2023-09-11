import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useTheme } from '../../../ThemeContext/ThemeContext';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className='header' >
            <div className='miccaNav'>
                <Link to='/'>micca</Link>
            </div>
            <div className={`links ${showMenu ? 'active' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/style">Style Guide</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/author">Authors</Link>
                <Link to="/pages"> Pages</Link>
                <div onClick={toggleTheme}>
                    <span role="img" aria-label="Mode" style={{ fontSize: '26px' }}>
                        {isDarkMode ? '🌞' : '🌙'}
                    </span>
                </div>
            </div>
            <div className="mobile-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </div>
        </nav>
    );
};

export default Navbar;
