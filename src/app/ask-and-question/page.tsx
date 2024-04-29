'use client'

import React, { useEffect, useRef, useState } from 'react';
import arrowDown from '../../app/assets/svgs/arrow_back.svg';
import Questions from '@/components/Questions/Questions';
import styles from '../styles/page.module.css';
import FooterAsk from '@/components/Footer/FooterAsk';
import { useRouter } from 'next/navigation';
import FooterMain from '@/components/Footer/FooterMain';
import { useTranslation } from 'react-i18next';

export default function page() {
  const navigate = useRouter();
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language;

    return (
      <>
        <section className={styles.ask_section}>
          <div className='container'>
            <div className={styles.back_block} style={ isMobile ? { display: "none" } : {} } onClick={() => navigate.push('/')}>
              <img src={arrowDown.src} alt='back arrow' className={styles.arrow_back_img} />
              <span>{ t("back") }</span>
            </div>
          </div>
          <Questions />
        </section>
        { isMobile ? (
          <FooterMain/>
        ) : (
          <FooterAsk/>
        ) }
      </>
    )
}
