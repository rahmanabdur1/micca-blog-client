import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './Blogs.css';
import { ThemeContext } from '../../../context/ThemeContext';
import useTitle from '../../../hook/useTitle';

const Blogs = () => {
  const { id } = useParams();
  const location = useLocation();
  const [category, setCategory] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!id && location.pathname.includes('/category/')) {
      // Handle the case when category is empty, e.g., redirect or show an error.
      console.log('Category is empty in the URL');
      return;
    }

    fetch(`http://localhost:5000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
    window.scrollTo(0, 0);
  }, [id, location]);

  useTitle("Blogs");

  if (!category) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className={`blogs-container ${theme ? 'dark' : ''}`}>
      <div className='category-name'>
        <p>CATEGORY</p>
        <h2>{category[0].category_name}</h2>
      </div>
      <div className='blogs'>
        {category.map((blog) => (
          <div key={blog._id}>
            <Link to={`/blog/${blog?._id}`}>
              <img src={blog?.img} alt='blog img' />
            </Link>
            <div className='blog-info'>
              <div className='blog-categoryname-time'>
                <Link to={`/category/${blog.category}`} style={{ textDecoration: 'none' }}>
                  <span>{blog.category_name}</span>
                </Link>
                <span>{blog.time}</span>
              </div>
              <div className='blog-title-des'>
                <h3>{blog.title}</h3>
                <p>{blog.des}</p>
              </div>
              <div className='blog-authors-info'>
                <div className='blog-authors'>
                  {blog.author.map((author,) => (
                    <div className='blog-author' key={author.authId}>
                      <Link to={`/author/${author.authId}`}  style={{ textDecoration: 'none' }} >
                        <img
                          src={author.img}
                          alt={`Image of ${author.name}`}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
                <div className='blog-authorsname'>
                  {blog.author.map((author, index) => (
                    <div key={author.id}>
                      <p>{author.name}{index < blog.author.length - 1 ? ',' : ''}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
