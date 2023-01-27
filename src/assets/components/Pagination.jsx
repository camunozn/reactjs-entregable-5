import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage } from '../../store/slices/currentPage.slice';

const Pagination = ({ pokemons }) => {
  const currentPage = useSelector(state => state.currentPage);
  const resultsPerPage = useSelector(state => state.resultsPerPage);

  const dispatch = useDispatch();

  // Pagination functionality
  const totalPages = Math.ceil(pokemons?.length / resultsPerPage);
  const pagesArr = [];

  // Filling array with numbers of pages
  for (let i = 1; i <= totalPages; i++) {
    pagesArr.push(i);
  }

  // Function to change page when clicking on buttons
  const changePage = page => {
    dispatch(changeCurrentPage(page));
  };

  // Reset current page number after a location change

  return (
    <div className="pagination">
      <button
        className="btn btn--pagination btn--pagination--arrows"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-left-long"></i>
      </button>
      <ul className="pagination-pages">
        <li>
          <button
            className={`btn btn--pagination ${
              currentPage <= 2 ? 'hidden' : ''
            }`}
            onClick={() => changePage(currentPage - 2)}
          >
            {currentPage - 2}
          </button>
        </li>
        <li>
          <button
            className={`btn btn--pagination ${
              currentPage === 1 ? 'hidden' : ''
            }`}
            onClick={() => changePage(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
        </li>
        <li>
          <button
            className="btn btn--pagination btn--pagination--selected"
            onClick={() => changePage(currentPage)}
          >
            {currentPage}
          </button>
        </li>
        <li>
          <button
            className={`btn btn--pagination ${
              currentPage === totalPages ? 'hidden' : ''
            }`}
            onClick={() => changePage(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        </li>
        <li>
          <button
            className={`btn btn--pagination ${
              currentPage >= totalPages - 1 ? 'hidden' : ''
            }`}
            onClick={() => changePage(currentPage + 2)}
          >
            {currentPage + 2}
          </button>
        </li>
      </ul>
      <button
        className="btn btn--pagination btn--pagination--arrows"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <i className="fa-solid fa-right-long"></i>
      </button>
    </div>
  );
};

export default Pagination;
