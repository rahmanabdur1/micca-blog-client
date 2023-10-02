
import React, { useState, useEffect, useContext } from 'react';
import './PaginationPost.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';


const PaginationPost = ({ currentPage, setCurrentPage }) => {
  const [paginationPosts, setPaginationPosts] = useState([]);
  const { theme } = useContext(ThemeContext);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchPostsData() {
      try {
        const response = await fetch(`http://localhost:5000/posts?page=${currentPage}&limit=${itemsPerPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPaginationPosts(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchPostsData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div  className={`pagination-post-container ${theme ? 'dark' : ''}`}>
      <h3 className='latest-post'>LATEST POSTS</h3>
      <div className='pagination-posts'>
        {paginationPosts.map((post) => (
          <div key={post._id}>
            <Link to={`/blog/${post?._id}`}>
              <img src={post?.img} alt='blog img' onClick={scrollToTop} />
            </Link>

            <div className='pagination-post-info'>
              <div className='post-category_name-time'>
                <span>{post.category_name}</span>
                <span>{post.time}</span>
              </div>
              <div className='pagination-post_title-des'>
                <span> {post.title}</span>
                <span>{post.des}</span>
              </div>
            </div>

            <div className="post-authors">
              {post.author.map((author,index) => (
                <div key={author._id}>
                  <Link to={`/author/${author._id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <img src={author.img} 
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
      <div className='pagination-buttons' onClick={scrollToTop}>
        {currentPage > 1 && (
          <button  onClick={handlePrevPage}>Previous Page</button>
        )}

        {
          currentPage < 4 && (
            <button  onClick={handleNextPage}>Next Page</button>
          )
        }
      </div>
    </div>
  );
};

export default PaginationPost;
