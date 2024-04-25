import React, { FC } from 'react';
import styles from './table.module.css';
import FlippableButton from "../../UI/FlippableButton/FlippableButton";
import { nanoid } from 'nanoid';

interface TableProps {
  data: any[];
  flippedIndexes: number[];
  handleClick: (index: number) => void;
}

const Table: FC<TableProps> = ({ data, flippedIndexes, handleClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.tableHeader}>№</th>
          <th className={styles.tableHeader}>
            Направление
            <FlippableButton index={0} isFlipped={flippedIndexes.includes(0)} onClick={handleClick} />
          </th>
          <th className={styles.tableHeader}>
            Мест
            <FlippableButton index={1} isFlipped={flippedIndexes.includes(1)} onClick={handleClick} />
          </th>
          <th className={styles.tableHeader}>
            Кандидатов
            <FlippableButton index={2} isFlipped={flippedIndexes.includes(2)} onClick={handleClick} />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={nanoid()} className={styles.tableRow}>
            <td className={styles.tableCell}>{row.id}</td>
            <td className={styles.tableCell}>{row.direction}</td>
            <td className={styles.tableCell}>{row.seats}</td>
            <td className={styles.tableCell}>{row.candidates}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;