import { Circular } from './Circular/Circular';
import styles from './circularprogresscontainer.module.css'

const CircularProgressContainer = () => {
  return (
    <div className={styles.circularContainer}>
      <div className={styles.circularLeft}>
        <ul className={styles.circularList}>
          <li>
            ПЛАН | 2400
          </li>
          <li>
            Факт | 957
          </li>
          <li>
            проведено ассесментов | 7
          </li>
        </ul>
      </div>
      <div className={styles.circularRight}>
        <h2 className={styles.circularHeading}>Заполненность</h2>
        <Circular currentValue={957} maxValue={2400} />
      </div>
    </div>
  )
}

export default CircularProgressContainer;
