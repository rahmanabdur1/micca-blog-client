import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css'
import { ThemeContext } from '../../../context/ThemeContext';
import useTitle from '../../../hook/useTitle';

const Blog = () => {
  const { id } = useParams();
  const [blog, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([])
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        console.log(data, 'da')
      });

    fetch(`http://localhost:5000/blog/${id}/related`)
      .then(res => res.json())
      .then(data => {
        setRelatedPosts(data);
      });
    window.scrollTo(0, 0);
  }, [id]);

  useTitle("blog-info");

  if (!blog) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className={`blog-container ${theme ? 'dark' : ''}`}>
      <div className='single-blog'>
        <div className='blog-category-name-time'>
          <Link to={`/category/${blog?.category}`} style={{ textDecoration: 'none' }}>
            <span>{blog.category_name}</span>
          </Link>
          <span>{blog.time}</span>
        </div>
        <div className='blog-title'>
          <h2>{blog.title}</h2>
        </div>
        <div className='blog-authors-des'>
          <div className='blog-authors'>
            {blog.author.map((author) => (
              <div key={author.authId}>
                <Link  to={`/author/${author.authId}`} style={{ textDecoration: 'none' }}>
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
        </div>.
        <div className='blog-img-des'>
          <img src={blog?.img} alt='blog img' />
          <p>{blog.des}</p>
        </div>
      </div>

      <h2 className='you-might-text'>YOU MIGHT ALSO LIKE</h2>
      <div className='related-blogs'>
        {relatedPosts.map(relatedPost => (
          <div key={relatedPost._id} style={{ marginRight: '10px' }}>
            <Link to={`/blog/${relatedPost?._id}`}>
              <img className='img' src={relatedPost?.img} alt='blog img' />
            </Link>
            <div className='related-blog-title'>
              <h3> {relatedPost.title}</h3>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Blog;
