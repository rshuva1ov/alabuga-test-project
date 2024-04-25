import React, { FC } from 'react';
import styles from './pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 2) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(<span key="ellipsis" className={styles.ellipsis}>...</span>);
        pageNumbers.push(
          <button key={totalPages} className={`${styles.pageButton} ${currentPage === totalPages ? styles.active : ''}`} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        );
      } else if (currentPage > totalPages - 2) {
        pageNumbers.push(
          <button key={1} className={`${styles.pageButton} ${currentPage === 1 ? styles.active : ''}`} onClick={() => handlePageChange(1)}>
            1
          </button>
        );
        pageNumbers.push(<span key="ellipsis" className={styles.ellipsis}>...</span>);
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        pageNumbers.push(
          <button key={1} className={`${styles.pageButton} ${currentPage === 1 ? styles.active : ''}`} onClick={() => handlePageChange(1)}>
            1
          </button>
        );
        pageNumbers.push(<span key="ellipsis" className={styles.ellipsis}>...</span>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              key={i}
              className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(<span key="ellipsis" className={styles.ellipsis}>...</span>);
        pageNumbers.push(
          <button key={totalPages} className={`${styles.pageButton} ${currentPage === totalPages ? styles.active : ''}`} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.39681 1.18737L0.890839 5.91864L5.39681 10.6499" stroke="black" stroke-width="0.901194" stroke-linecap="round" />
        </svg>

      </button>
      {renderPageNumbers()}
      <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.01136 1.41267L5.51733 6.14394L1.01136 10.8752" stroke="black" stroke-width="0.901194" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;