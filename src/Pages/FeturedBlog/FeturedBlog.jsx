import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FeturedBlog.css';
import { ThemeContext } from '../../context/ThemeContext';

function FeturedBlog() {
  const [inspirationalBlog, setInspirationalBlog] = useState([]);
  const [lifelessonsBlog, setLifelessonsBlog] = useState([])
  const [productivityBlog, setProductivityBlog] = useState([])
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('http://localhost:5000/inspirational-blog')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Inspirational blog not found');
        }
      })
      .then((data) => {
        setInspirationalBlog(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/lifelessons-blog')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Inspirational blog not found');
        }
      })
      .then((data) => {
        setLifelessonsBlog(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:5000/productivity-blog')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Inspirational blog not found');
        }
      })
      .then((data) => {
        setProductivityBlog(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };



  return (
    <div className={`feturedblogs-container ${theme ? 'dark' : ''}`}>
      <h3 className='feture-posttitle'>FEATURED POSTS</h3>

      <div className="fetured-blogs">
        <div className="left-feturedblog">
          {inspirationalBlog.map((blog) => (
            <div key={blog._id}>
              <Link to={`/blog/${blog?._id}`}>
                <img src={blog?.img} alt="blog img" onClick={scrollToTop} />
              </Link>
              <div className='leftblog-categoryname-time'>
                <Link to={`/category/${blog?.category}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                  <span>{blog.category_name}</span>
                </Link>
                <span >{blog.time}</span>
              </div>
              <div className='leftblog-title-des'>
                <h2>{blog.title}</h2>
                <p>{blog.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="right-feturedblog">
          <div className='lifelessons-categoryblog'>
            {lifelessonsBlog.map((blog) => (
              <div key={blog._id}>
                <Link to={`/blog/${blog?._id}`}>
                  <img src={blog?.img} alt="blog img" onClick={scrollToTop} />
                </Link>
                <div className='rightblog-categoryname-time'>
                  <Link to={`/category/${blog?.category}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <span>{blog.category_name}</span>
                  </Link>
                  <span>{blog.time}</span>
                </div>
                <div className='rightblog-title-des'>
                  <h3>{blog.title}</h3>
                  <p>{blog.des}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='productivity-categoryblog'>
            {productivityBlog.map((blog) => (
              <div key={blog._id}>
                <Link to={`/blog/${blog?._id}`}>
                  <img src={blog?.img} alt="blog img" onClick={scrollToTop} />
                </Link>
                <div className='rightblog-categoryname-time'>
                  <Link to={`/category/${blog?.category}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <span>{blog.category_name}</span>
                  </Link>
                  <span>{blog.time}</span>
                </div>
                <div className='rightblog-title-des'>
                  <h3>{blog.title}</h3>
                  <p>{blog.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeturedBlog;
