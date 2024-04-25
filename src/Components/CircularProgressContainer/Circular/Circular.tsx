import React from 'react';
import styles from './circular.module.css';
import {
  ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

interface CircularProgressProps {
  currentValue: number;
  maxValue: number;
}

export const Circular: React.FC<CircularProgressProps> = ({
  currentValue,
  maxValue,
}) => {

  const COLORS =
    ['#D9D9D9', '#6BC3D6'];

  const data = [
    {
      students: currentValue
    },
    {
      students: maxValue
    },
  ];

  const percentage = Math.ceil((currentValue / maxValue) * 100);
  return (
    <div className={styles.circular}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="students" data={data} cx="50%"
            cy="50%" outerRadius={50}
            innerRadius={37}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.text}>
        {percentage}%
      </div>
    </div>
  );
}
