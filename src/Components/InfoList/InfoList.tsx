import React, { FC, useState } from 'react';
import { IWidget } from "../IntramuralContent";
import styles from './infolist.module.css';
import { data } from "../../app/data";
import Table from '../Table/Table';
import Pagination from '../../UI/Pagination/Pagination';

export const InfoList: FC<IWidget> = ({ page, onPageChange }) => {
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (flippedIndexes.includes(index)) {
      setFlippedIndexes(flippedIndexes.filter((i) => i !== index));
    } else {
      setFlippedIndexes([...flippedIndexes, index]);
    }
  };

  const [currentPage, setCurrentPage] = useState(page);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange((pageNumber).toString());
  };

  return (
    <div className={styles.infoList}>
      <Table data={currentData} flippedIndexes={flippedIndexes} handleClick={handleClick} />
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
    </div>
  );
};