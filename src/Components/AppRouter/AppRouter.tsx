import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Alabuga, Intramural, Modules, NotFoundPage } from '../RouterPages';
import styles from './approuter.module.css';

const AppRouter = () => {
  return (
    <Router>
      <div className={`${styles.container} ${styles.alabuga}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/modules/alabuga/intramural" />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/alabuga" element={<Alabuga />} />
          <Route path="/modules/alabuga/intramural" element={<Intramural />} />
          {/* Обработка 404 ошибки */}
          <Route
            path="*"
            element={
              <NotFoundPage />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;