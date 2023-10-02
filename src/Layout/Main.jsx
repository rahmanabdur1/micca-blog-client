import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

import { ThemeContext } from '../context/ThemeContext';
import Subscribe from '../Pages/Subscribe/Subscribe';
import Footer from '../Pages/Footer/Footer';
import FooterReserved from '../Pages/Footer/FooterReserved';


const Main = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme ? 'dark' : ''}>
            <Navbar />
            <Outlet />
            <Subscribe />
            <Footer />
            <FooterReserved/>
        </div>
    );
};

export default Main;