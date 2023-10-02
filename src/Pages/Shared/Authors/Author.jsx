import React, { useContext } from 'react';
import './Author.css'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';

const Author = ({ author }) => {
    const { img, posts, name} = author;
    const { theme} = useContext(ThemeContext);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={`singleauth ${theme ? 'dark' : ''}`}>
            <Link to={`/author/${author._id}`} onClick={scrollToTop}>
                <img src={img} />
            </Link>
            <h2>{name}</h2>
            <p>{posts} Posts </p>
        </div>
    );
};

export default Author;