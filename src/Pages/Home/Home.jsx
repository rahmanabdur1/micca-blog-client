import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BgText from './BgText/BgText';
import FeturedBlog from '../FeturedBlog/FeturedBlog';
import PaginationBlog from './PaginationBlog/PaginationBlog';
import useTitle from '../../hook/useTitle';

const Home = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useTitle("Modern");

  useEffect(() => {
    setCurrentPage(1);

  }, [location]);

  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="home-container">
      <>
      {currentPage === 1 ? (
        <>
          <BgText />
          <FeturedBlog />
          <PaginationBlog currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      ) : (
        <>
          <PaginationBlog currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
      </>
       <div className='pagination-buttons' onClick={scrollToTop}>
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>Previous Page</button>
        )}

        {currentPage < 4 && (
          <button onClick={handleNextPage}>Next Page</button>
        )}
      </div>
    </div>
  );
};

export default Home;
