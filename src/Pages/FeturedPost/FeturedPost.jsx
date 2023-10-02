import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FeturedPost.css';
import { ThemeContext } from '../../context/ThemeContext';

function FeturedPost() {
  const [inspirationalPost, setInspirationalPost] = useState([]);
  const [lifelessonsPost, setLifelessonsPost] = useState([])
  const [productivityPost, setProductivityPost] = useState([])
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('http://localhost:5000/inspirational-post')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Inspirational post not found');
        }
      })
      .then((data) => {
        setInspirationalPost(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/lifelessons-post')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Inspirational post not found');
        }
      })
      .then((data) => {
        setLifelessonsPost(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:5000/productivity-post')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Inspirational post not found');
        }
      })
      .then((data) => {
        setProductivityPost(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className={`feturedposts-container ${theme ? 'dark' : ''}`}>
      <h3 className='feture-post_title'>FEATURED POSTS</h3>
      
      <div className="fetured-posts">
        <div className="left-feturedpost">
          {inspirationalPost.slice(1).map((post) => (
            <div key={post._id}>
              <Link to={`/blog/${post?._id}`}>
                <img src={post?.img} alt="blog img" onClick={scrollToTop} />
              </Link>
              <div className='leftpost-name-time'>
                <span >{post.category_name}</span>
                <span >{post.time}</span>
              </div>
              <div className='leftpost-des'>
                <p>{post.title}</p>
                <p>{post.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="right-feturedpost">
          <div className='lifelessons-category_post'>
            {lifelessonsPost.slice(0).map((post) => (
              <div key={post._id}>
                <Link to={`/blog/${post?._id}`}>
                  <img src={post?.img} alt="blog img" onClick={scrollToTop} />
                </Link>
                <div className='rightpost-name-time'>
                  <span >{post.category_name}</span>
                  <span>{post.time}</span>
                </div>
                <div className='rightpost-des'>
                  <p>{post.title}</p>
                  <p>{post.des}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='productivity-category_post'>
            {productivityPost.slice(1).map((post) => (
              <div key={post._id}>
                <Link to={`/blog/${post?._id}`}>
                  <img src={post?.img} alt="blog img" onClick={scrollToTop} />
                </Link>
                <div className='rightpost-name-time'>
                  <span>{post.category_name}</span>
                  <span>{post.time}</span>
                </div>
                <div className='rightpost-des'>
                  <p>{post.title}</p>
                  <p>{post.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeturedPost;
