'use client'

import React, { useRef } from 'react';
import arrowDown from '../../app/assets/svgs/arrow_back.svg';
import Questions from '@/components/Questions/Questions';
import styles from '../styles/page.module.css';
import FooterAsk from '@/components/Footer/FooterAsk';
import { useRouter } from 'next/navigation';

export default function page() {
  const navigate = useRouter();
  

  const questionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (id && typeof window !== 'undefined' && questionRef.current) {
  //     questionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [id]);

  return (
    <>
      <section className={styles.ask_section}>
        <div className='container'>
          <div className={styles.back_block} onClick={() => navigate.push('/')}>
            <img src={arrowDown.src} alt='back arrow' className={styles.arrow_back_img} />
            <span>Назад</span>
          </div>
        </div>
        <Questions questionRef={questionRef} />
      </section>
      <FooterAsk/>
    </>
  )
}
