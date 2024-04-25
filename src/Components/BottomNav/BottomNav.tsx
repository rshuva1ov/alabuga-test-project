import { FC, useState } from 'react';
import { IWidget } from '../IntramuralContent';
import styles from './bottomnav.module.css';

export const BottomNav: FC<IWidget> = ({ page, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage === 2 ? 2 : currentPage + 1);
    onPageChange(((page % 2) + 1).toString());
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
    onPageChange((page === 1 ? 2 : page - 1).toString());
  };

  return (
    <div className={styles.buttons}>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`${styles.button} ${currentPage === 1 ? styles['button-disabled'] : ''}`}
      >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.49599 1.48422L0.863525 7.39831L6.49599 13.3124" stroke="black" stroke-width="1.12649" stroke-linecap="round" />
        </svg>
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === 2}
        className={`${styles.button} ${currentPage === 2 ? styles['button-disabled'] : ''}`}
      >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.51414 0.765839L7.14661 6.67993L1.51414 12.594" stroke="black" stroke-width="1.12649" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  );
};