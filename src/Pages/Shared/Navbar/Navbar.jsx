import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { ThemeContext } from '../../../context/ThemeContext';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleToggleTheme = () => {
        toggleTheme();
    };

    return (
        <nav className={`header ${theme ? 'dark' : ''}`}>
            <div className='micca-text'>
                <Link to='/'>micca</Link>
            </div>

            <div className={`micca-links ${showMenu ? 'active' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/style">Style Guide</Link>
                <Link to="/authors">Authors</Link>
                <Link to="/contact">Contact</Link>
                <Link to='/pages'>Pages</Link>
                <button onClick={handleToggleTheme} className="theme-toggle">
                    {theme ? (
                        <FontAwesomeIcon icon={faSun} className="icon-sun" />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className="icon-moon" />
                    )}
                </button>
            </div>

            <div className="mobile-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </div>
        </nav>
    );
};

export default Navbar;
