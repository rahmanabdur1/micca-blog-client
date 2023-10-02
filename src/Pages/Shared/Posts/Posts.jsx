import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Posts.css'
import { ThemeContext } from '../../../context/ThemeContext';

const Posts = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className='posts-container'>
      <h2>Letest Post</h2>
      <div className='posts'>
        {category.map((post) => (
          <div key={post._id}>
            <Link to={`/blog/${post?._id}`}>
              <img src={post?.img} alt='blog img' />
            </Link>

            <div className={`post-info${theme ? 'dark' : ''}`}>
              <div className='post-category_name-time'>    
                  <span className='post-category_name'>{post.category_name}</span>
                  <span className='post-time'>{post.time}</span>
                </div>
                <div className='post-title-des'>
                <span className='post-title'> {post.title}</span>
                <span className='post-des'>{post.des}</span>
              </div>
            </div>

            <div className='post-authors'>
              {post.author.map((author, index) => (
                <div key={author._id}>
                  <Link to={`/author/${author._id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <img
                      src={author.img}
                      alt='auth-img'
                      className={`author-image ${index === 1 ? 'overlap' : ''}`}
                    />
                  </Link>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
