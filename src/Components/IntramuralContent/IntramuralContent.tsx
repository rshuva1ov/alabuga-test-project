import { useSearchParams } from 'react-router-dom';
import CircularProgressContainer from '../CircularProgressContainer/CircularProgressContainer';
import { InfoList } from '../InfoList';
import { Widget2 } from '../Widget2';
import { Widget3 } from '../Widget3';
import styles from './intramuralcontent.module.css'

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
    <div>
      <div className={styles.intramuralTop}>
        <CircularProgressContainer />
        <InfoList page={widget1Page} onPageChange={handleWidget1PageChange} />
      </div>
      <Widget2 page={widget2Page} onPageChange={handleWidget2PageChange} />
      <Widget3 page={widget3Page} onPageChange={handleWidget3PageChange} />
    </div>
  );
};


export default IntramuralContent;