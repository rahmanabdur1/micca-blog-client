import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useTheme } from '../ThemeContext/ThemeContext';

const Main = () => {
    const { isDarkMode} = useTheme();
    return (
        <div className={`App ${isDarkMode ? 'dark' : ''}`}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;