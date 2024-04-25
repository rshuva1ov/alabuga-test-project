import React, { useEffect } from 'react';
import styles from './routerpages.module.css';
import arrow from '../../images/arrow.svg'
import { Link, useNavigate } from 'react-router-dom';
import IntramuralContent from '../IntramuralContent/IntramuralContent';


export const Modules = () => {
  return (
    <div>
      <h1>
        <Link to="/modules">Модули</Link>
      </h1>
    </div>
  );
};

export const Alabuga = () => {
  return (
    <div>
      <h1>
        <Link to="/modules">Модули</Link><img src={arrow} alt='' className={styles.arrow} />
        <Link to="/modules/alabuga">Алабуга Политех</Link>
      </h1>
    </div>
  );
};

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <h2><Link to="/">Вернуться на главную</Link></h2>
    </div>
  );
}

export const Intramural = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/modules/alabuga/intramural/?widget1Page=1&widget2Page=1&widget3Page=1`);
  }, [navigate])

  return (
    <div>
      <h1>
        <Link to="/modules">Модули</Link>
        <img src={arrow} alt='' className={styles.arrow} />
        <Link to="/modules/alabuga">Алабуга Политех</Link>
        <img src={arrow} alt='' className={styles.arrow} />
        <Link to="/modules/alabuga/intramural">Очный</Link>
      </h1>
      <IntramuralContent />
    </div>
  );
};
