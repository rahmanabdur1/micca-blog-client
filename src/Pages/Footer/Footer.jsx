import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { ThemeContext } from '../../context/ThemeContext';

const Footer = () => {
    const [categories, setCategories] = useState([]);
    const { theme} = useContext(ThemeContext);

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);


    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <div className={`footer ${theme ? 'dark' : ''}`}>
            <div className="micca">
                <h5>micca</h5>
                <p >Sint culpa irure nostrud duis irure pariatur Lorem mollit mollit nulla duis id ut enim est sit nostrud magna mollit.</p>
            </div>

            <div className="category">
                <h5>CATEGORIES</h5>
                <div className="category-btn">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/category/${category.id}`} onClick={scrollToTop}>
                            <button>
                                {category.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="footerlinks">
                <h5>LINKS</h5>
                <div className="link" onClick={scrollToTop}>
                    <Link to="/">Home</Link>
                    <Link to="/style">Style guide</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/author">Author</Link>
                </div>
            </div>
            <div className="follow">
                <h5>FOLLOW US</h5>
                <div className="socials-links">
                    <a href="https://twitter.com/your-twitter-url" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a href="https://www.youtube.com/your-youtube-url" target="_blank" rel="noopener noreferrer">
                        YouTube
                    </a>
                    <a href="https://www.facebook.com/your-facebook-url" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
