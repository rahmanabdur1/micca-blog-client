
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [categories, setCategories] = useState([]);

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
        <div className="footer">
            <div className="micc">
                <p className='miccaTitle'>macca</p>
                <p className='miccaDetail'>Sint culpa irure nostrud duis irure pariatur Lorem mollit mollit nulla duis id ut enim est sit nostrud magna mollit.</p>
            </div>
            <div className="category">
                <h4>CATEGORIES</h4>
                <div className="btn">
                    {categories.map((category) => (
                        <Link key={category.id} className="" to={`/category/${category.id}`}  onClick={scrollToTop}>  <button>
                        {category.name}    </button>
                        </Link>
                    
                    ))}
                </div>
            </div>
            <div className="footerlinks">
                <h5>Links</h5>
                <div className="link" onClick={scrollToTop}>
                    <Link to="/">Home</Link>
                    <Link to="/style">Style guide</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/author">Author</Link>
                </div>
            </div>
            <div className="follow">
                <h5>Follow us</h5>
                <div className="folllowIcon">
                    <Link to="/">Home</Link>
                    <Link to="/style">Style</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/author">Author</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

