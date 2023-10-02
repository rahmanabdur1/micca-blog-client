import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Post.css'
import { ThemeContext } from '../../../context/ThemeContext';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
      });

    fetch(`http://localhost:5000/blog/${id}/related`)
      .then(res => res.json())
      .then(data => {
        setRelatedPosts(data);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  
  return (
    <div className={`post-container ${theme ? 'dark' : ''}`}>
      <div className={`single-post ${theme ? 'dark' : ''}`}>
        <span className='category-name'>{post.category_name}</span>
        <h2>{post.title}</h2>
        <p>{post.author.name}</p>
        <img src={post?.img} alt='blog img' />
        <p>{post.des}</p>
      </div>
      <h2>Related Posts</h2>
      <div className='related-posts'>
        {relatedPosts.map(relatedPost => (
          <div key={relatedPost._id} style={{ marginRight: '10px' }}>
            <Link to={`/blog/${relatedPost?._id}`} onClick={scrollToTop}>
              <img className='img' src={relatedPost?.img} alt='blog img' />
            </Link>
              <div className='related-post'>
                <div className='post-title-des'>
                <span className='post-title'> {relatedPost.title}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Post;
