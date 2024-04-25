import React from 'react';
import styles from './/flippablebutton.module.css';

interface FlippableButtonProps {
  index: number;
  isFlipped: boolean;
  onClick: (index: number) => void;
}

const FlippableButton: React.FC<FlippableButtonProps> = ({ index, isFlipped, onClick }) => {
  return (
    <button className={styles.tableButton} onClick={() => onClick(index)}>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.flipable} ${isFlipped ? styles.flipped : ''}`}
      >
        <path
          opacity="0.7"
          d="M3.246 7.24155C3.20733 7.202 3.042 7.05265 2.906 6.91354C2.05067 6.09795 0.650667 3.97034 0.223333 2.85675C0.154667 2.68763 0.00933333 2.26006 0 2.03161C0 1.81271 0.048 1.60404 0.145333 1.40492C0.281333 1.1567 0.495333 0.957574 0.748 0.848466C0.923333 0.778227 1.448 0.669118 1.45733 0.669118C2.03133 0.56001 2.964 0.5 3.99467 0.5C4.97667 0.5 5.87133 0.56001 6.454 0.649342C6.46333 0.659571 7.11533 0.76868 7.33867 0.888018C7.74667 1.10692 8 1.53449 8 1.99206V2.03161C7.99 2.32962 7.73667 2.95631 7.72733 2.95631C7.29933 4.00989 5.968 6.08841 5.08333 6.92377C5.08333 6.92377 4.856 7.15904 4.714 7.26132C4.51 7.4209 4.25733 7.5 4.00467 7.5C3.72267 7.5 3.46 7.41067 3.246 7.24155Z"
          fill="#030229"
        />
      </svg>
    </button>
  );
};

export default FlippableButton;