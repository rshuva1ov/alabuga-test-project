import { FC, useState } from "react";
import { IWidget } from "../IntramuralContent";
import Pagination from "../../UI/Pagination/Pagination";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import styles from './commuterschedule.module.css';

export const CommuterSchedule: FC<IWidget> = ({ page, onPageChange }) => {

  const [currentPage, setCurrentPage] = useState(page);
  const totalPages = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange((pageNumber).toString());
  };

  const data = [
    { date: '01.05.2024', value: 140 },
    { date: '02.05.2024', value: 155 },
    { date: '03.05.2024', value: 180 },
    { date: '04.05.2024', value: 160 },
    { date: '05.05.2024', value: 193 },
    { date: '06.05.2024', value: 207 },
    { date: '07.05.2024', value: 194 },
    { date: '08.05.2024', value: 182 },
    { date: '09.05.2024', value: 175 },
    { date: '10.05.2024', value: 168 },
    { date: '11.05.2024', value: 160 },
    { date: 'Не известно', value: 170 },
  ];


  return (
    <div className={styles.commuterSchedule}>

      {currentPage === 1
        ?
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} barSize={30}>
              <XAxis dataKey="date" interval={0} height={40} tickSize={12} fontSize={12} />
              <YAxis type="number" domain={[0, 500]} axisLine={false} tickLine={false} />
              <CartesianGrid strokeDasharray="0 0" stroke="#ccc" />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#6BC3D6"
              >
                {data.map((entry, index) => (
                  <LabelList key={index} dataKey="value" position="top" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        :
        <div className={styles.commuterPlug}>Пока нет данных</div>
      }
      <div className={styles.commuterBox}>
        <div className={styles.commuterMarker}>
          <span></span>
          Количество приехавших
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </div >
  );
};