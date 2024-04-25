import { useSearchParams } from 'react-router-dom';
import { BottomNav } from '../BottomNav';
import CircularProgressContainer from '../CircularProgressContainer/CircularProgressContainer';
import { CommuterSchedule } from '../CommuterSchedule';
import { InfoList } from '../InfoList';
import styles from './intramuralcontent.module.css';

export interface IWidget {
  page: number;
  onPageChange: (pageNumber: string) => void;
}

const IntramuralContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const widget1Page = Number(searchParams.get('widget1Page')) || 1;
  const widget2Page = Number(searchParams.get('widget2Page')) || 1;
  const widget3Page = Number(searchParams.get('widget3Page')) || 1;

  const handleWidget1PageChange = (pageNumber: string) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      widget1Page: pageNumber,
    });
  };

  const handleWidget2PageChange = (pageNumber: string) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      widget2Page: pageNumber,
    });
  };

  const handleWidget3PageChange = (pageNumber: string) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      widget3Page: pageNumber,
    });
  };

  return (
    <div className={styles.intramuralContent}>
      <div className={styles.intramuralTop}>
        <CircularProgressContainer />
        <InfoList page={widget1Page} onPageChange={handleWidget1PageChange} />
      </div>
      <CommuterSchedule page={widget2Page} onPageChange={handleWidget2PageChange} />
      <BottomNav page={widget3Page} onPageChange={handleWidget3PageChange} />

      <p>Страница виджета № 1, передаваемая в query: {widget1Page}</p>
      <p>Страница виджета № 2, передаваемая в query: {widget2Page}</p>
      <p>Страница виджета № 3, передаваемая в query: {widget3Page}</p>
    </div>
  );
};


export default IntramuralContent;