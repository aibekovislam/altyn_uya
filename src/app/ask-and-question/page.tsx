import React from 'react';
import arrowDown from '../../app/assets/svgs/arrow_back.svg';
import Questions from '@/components/Questions/Questions';
import styles from '../styles/page.module.css';

export default function page() {
  return (
    <section className={styles.ask_section}>
      <div className='container'>
        <div className={styles.back_block}>
          <img src={arrowDown.src} alt='back arrow' className={styles.arrow_back_img} />
          <span>Назад</span>
        </div>
        <Questions/>
      </div>
    </section>
  )
}
