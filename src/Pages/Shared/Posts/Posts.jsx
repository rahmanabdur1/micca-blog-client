import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Posts.css'

const Posts = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);

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
    <div className='postsContainer'>
      <div className='posts'>
        {category.map((post) => (
          <div key={post._id}>
            <Link to={`/blog/${post?._id}`}>
              <img src={post?.img} alt='blog img' />
            </Link>
            <div className='relatedPost'>
              <p className='postTitle'> {post.title}</p>
              <p>{post.des}</p>
            </div>
            <div className='authors'>
              {post.author.map(author => (
                <div className='' key={author._id}>
                  <Link to={`/author/${author._id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}><p>{author.name}</p></Link>
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
