import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import BgText from './BgText/BgText';
import FeturedPost from '../FeturedPost/FeturedPost';
import PaginationPost from './PaginationPost/PaginationPost';

const Home = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [location]);

  return (
    <div className="home-container">
      {currentPage === 1 ? (
        <>
          <BgText />
          <FeturedPost />
          <PaginationPost currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      ) : (
        <PaginationPost currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default Home;
