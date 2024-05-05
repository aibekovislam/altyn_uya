'use client'

import React, { useEffect, useState } from 'react';
import styles from '../app/styles/about_us.module.css';
import altyn_logo from '../app/assets/svgs/logoAltyn.svg';
import pc from '../app/assets/svgs/pc.svg';
import mobile from '../app/assets/svgs/mobile.svg';
import arrowDown from '../app/assets/svgs/arrow_down.svg';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function AboutUsSection() {
    const control = useAnimation()
    const [ref, inView] = useInView()
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(() => {
        if(typeof window !== 'undefined') {
            return window.innerWidth < 620
        }
    });

    const boxVariant = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }  
    
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
    }, [control, inView]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 570);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.section 
            ref={ref} 
            variants={boxVariant} initial="hidden"
            animate={control} 
            className={`${styles.about_us}`}
            id='about_us'>
            <div className='container'>
                <div className={styles.about_us__items}>
                    <div className={styles.about_us_title}>{ t("about") }</div>
                    <div className={styles.about_us_cards}>
                        <div className={styles.about_us_first_card}>
                            <div className={styles.block_about_us}>
                                <Image src={altyn_logo.src} width={0} height={0} alt='logo' className={styles.cardImgSvg} />
                                <p className={styles.card_description}>{ t("about_us_text1") }</p>
                            </div>
                        </div>
                        <div className={styles.about_us_second_card}>
                            <div className={styles.block_about_us}>
                                <Image src={pc.src} width={0} height={0} alt='computer svg' className={styles.cardImgSvg} />
                                <p className={styles.card_description}>{ t("about_us_text2") }</p>
                            </div>
                        </div>
                        <div className={styles.about_us_third_card}>
                            <div className={styles.block_about_us}>
                                <Image src={mobile.src} width={0} height={0} alt='mobile phone svg' className={styles.cardImgSvg} />
                                <p className={styles.card_description}>{ t("about_us_text3") }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.arrow_down}>
                    <Image src={arrowDown.src} width={25} height={35} alt='arrow down svg' />
                </div>
            </div>
        </motion.section>
    )
}
