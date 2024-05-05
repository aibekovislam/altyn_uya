'use client'

import React, { useEffect, useState } from 'react';
import arrowDown from '../../app/assets/svgs/arrow_back.svg';
import Questions from '@/components/Questions/Questions';
import styles from '../styles/page.module.css';
import FooterAsk from '@/components/Footer/FooterAsk';
import FooterMain from '@/components/Footer/FooterMain';
import { useTranslation } from 'react-i18next';
import '../i18n';
import 'animate.css';
import Image from 'next/image';

export default function page() {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const { t } = useTranslation();

    return (
      <>
        <section className={styles.ask_section}>
          <div className='container'>
            <a href='/' className={styles.back_block} style={ isMobile ? { display: "none" } : { textDecoration: "none", color: "black" } }>
              <Image src={arrowDown.src} width={20} height={20} alt='back arrow' className={styles.arrow_back_img} />
              <span>{ t("back") }</span>
            </a>
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
