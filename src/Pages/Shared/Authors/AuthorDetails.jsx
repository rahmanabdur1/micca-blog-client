import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AuthorDetails.css';
import { ThemeContext } from '../../../context/ThemeContext';
import useTitle from '../../../hook/useTitle';

const AuthorDetails = () => {
  const { authId } = useParams();
  const [author, setAuthor] = useState(null);
  const [authorCategories, setAuthorCategories] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`http://localhost:5000/author/${authId}`)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data);
      })
      .catch((error) => {
        console.error('Error fetching author details:', error);
      });

 
    fetch(`http://localhost:5000/author/${authId}/blogs`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setAuthorCategories(data.blogs); 
      })
      .catch((error) => {
        console.error('Error fetching author categories:', error);
      });

      window.scrollTo(0, 0);
  }, [authId]);

  useTitle("authors-info");
 
  if (!author) {
    return <div className='loading'>Loading...</div>;
  }


  
  return (
    <div className='author-details-container'>
      {author && (
        <div className={`author-details ${theme ? 'dark' : ''}`} >
          <img src={author.img} alt={author.authorname} />
          <h2>{author.authorname}</h2>
          <p>{author.posts} Posts</p>
          <p>{author.title}</p>
        </div>
      )}

      <div className='auth-blogs'>
        {authorCategories.length > 0 ? (
          <div className='auth-blog'>
            {authorCategories.map(category => (
              <div key={category._id}>
                <Link to={`/blog/${category?._id}`}>
                  <img src={category.img} alt={`${category.title} Image`} />
                </Link>
                 <div className='blog-info'>
                  <div className='blog-categoryname-time'>
                    <Link to={`/category/${category?.category}`} style={{ textDecoration: 'none' }}>
                      <span>{category.category_name}</span>
                    </Link>
                    <span>{category.time}</span>
                  </div>
                  <div className='blog-title-des'>
                    <h3>{category.title}</h3>
                    <p>{category.des}</p>
                  </div>
                  <div className='blog-authors-info'>
                    <div className='blog-authors'>
                      {category.author.map((author) => (
                          <div className='blog-author' key={author.authId}>
                          <Link to={`/author/${author?.authId}`}  style={{ textDecoration: 'none' }}>
                            <img
                              src={author.img}
                              alt={`Image of ${author.name}`}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className='blog-authorsname'>
                      {category.author.map((author,index) => (
                        <div key={author.id}>
                             <p>{author.name}{index < category.author.length - 1 ? ',' : ''}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
