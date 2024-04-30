'use client'

import React, { useEffect, useState } from 'react';
import styles from '../app/styles/about_us.module.css';
import altyn_logo from '../app/assets/svgs/logoAltyn.svg';
import pc from '../app/assets/svgs/pc.svg';
import mobile from '../app/assets/svgs/mobile.svg';
import arrowDown from '../app/assets/svgs/arrow_down.svg';
import { useTranslation } from 'react-i18next';

export default function AboutUsSection() {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(() => {
        if(typeof window !== 'undefined') {
            return window.innerWidth < 600
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={styles.about_us} style={ isMobile ? { height: 'auto' } : {} } id='about_us'>
            <div className='container'>
                <div className={styles.about_us__items}>
                    <div className={styles.about_us_title}>{ t("about") }</div>
                    <div className={styles.about_us_cards}>
                        <div className={styles.about_us_first_card}>
                            <div className={styles.block_about_us}>
                                <img src={altyn_logo.src} className={styles.cardImgSvg} />
                                <p className={styles.card_description}>{ t("about_us_text1") }</p>
                            </div>
                        </div>
                        <div className={styles.about_us_second_card}>
                            <div className={styles.block_about_us}>
                                <img src={pc.src} className={styles.cardImgSvg} />
                                <p className={styles.card_description}>{ t("about_us_text2") }</p>
                            </div>
                        </div>
                        <div className={styles.about_us_third_card}>
                            <div className={styles.block_about_us}>
                                <img src={mobile.src} className={styles.cardImgSvg} />
                                <p className={styles.card_description}>{ t("about_us_text3") }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.arrow_down}>
                    <img src={arrowDown.src} />
                </div>
            </div>
        </section>
    )
}
