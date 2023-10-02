import React from 'react';

const PaginationBtn = ({handlePrevPage,handleNextPage }) => {
    return (
        <div>
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

export default PaginationBtn;