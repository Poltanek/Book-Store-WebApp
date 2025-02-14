import React from 'react';
import styles from './styles/HeroSection.module.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const goToBlogPage = () => {
    navigate('/blogpage');
  }

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.header}>Captivating Books All Online!</h1>

        <p className={styles.paragraph}>
          Discover your next favorite book at Midnight Manuscripts. From fiction to non-fiction, we have something for everyone.
        </p>

        <button onClick={goToBlogPage} className={styles.ctaButton}>FIND OUT MORE
        <i class='bx bx-search-alt'></i>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
