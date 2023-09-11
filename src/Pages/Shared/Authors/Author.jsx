import React from 'react';
import './Author.css'
import { Link } from 'react-router-dom';

const Author = ({author}) => {
    const {img,posts,name, _id}=author;
    
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    
    return (
        <div className='singleauth'>
            <Link to={`/author/${author._id}`}  onClick={scrollToTop}>  <img src={img}/></Link>
            <h2>{name}</h2>
            <p>{posts} Posts </p>
        </div>
    );
};

export default Author;