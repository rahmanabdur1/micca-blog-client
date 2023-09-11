import React, { useState, useEffect } from 'react';
import './PaginationPost.css';
import { Link } from 'react-router-dom';

const PaginationPost = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationPosts, setPaginationPosts] = useState([]);
    const itemsPerPage = 6;

    useEffect(() => {

        async function fetchNewsData() {
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

        fetchNewsData();
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
        <div className='paginationContainer'>
            <div className='paginationPosts'>
                {paginationPosts.map((post) => (
                    <div key={post._id}>
                        <Link to={`/blog/${post?._id}`}>
                            <img src={post?.img} alt='blog img' />
                        </Link>
                        <div className='paginationRelatedPost'>
                            <p className='paginationTitle'> {post.title}</p>
                            <p className='paginationDetail'>{post.des}</p>
                        </div>
                        <div className='paginationAuthors'>

                        </div>
                    </div>
                ))}
            </div>
            <div className='paginationButtons' onClick={scrollToTop}>
                {currentPage > 1 && (
                    <button onClick={handlePrevPage}>Previous Page</button>
                )}

                {
                 currentPage < 4 && (
                    <button onClick={handleNextPage}>Next Page</button>
                    )
                }
            </div>
        </div>
    );
};

export default PaginationPost;
