import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AuthorDetails.css'
import { ThemeContext } from '../../../context/ThemeContext';

const AuthorDetails = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [authorCategories, setAuthorCategories] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`http://localhost:5000/author/${id}`)
      .then(res => res.json())
      .then(data => {
        setAuthor(data);
      });

    fetch(`http://localhost:5000/author/${id}/categories`)
      .then(res => res.json())
      .then(data => {
        if (data.categories) {
          setAuthorCategories(data.categories);
        }
      });
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='author-details-container'>
      {author && (
        <div className={`author-details ${theme ? 'dark' : ''}`} >
          <img src={author.img} alt={author.name} />
          <h2>{author.name}</h2>
          <p> {author.posts} Posts</p>
          <p>{author.title}</p>
        </div>
      )}

      <div className='auth-posts'>
        {authorCategories.length > 0 ? (
          <div className='auth-post'>
            {authorCategories.map(category => (
              <div key={category._id}>
                <Link to={`/blog/${category?._id}`} onClick={scrollToTop}>
                  <img src={category.img} alt={`${category.title} Image`} />
                </Link>
                <div className='post-category_name-time'>
                  <span >{category.category_name}</span>
                  <span >{category.time}</span>
                </div>
                <div className='post-title-des'>
                  <span > {category.title}</span>
                  <span >{category.des}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No categories found for this author.</p>
        )}
      </div>
    </div>
  );
};

export default AuthorDetails;
