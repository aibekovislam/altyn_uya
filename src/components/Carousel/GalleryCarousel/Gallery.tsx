"use client"

import React, { useEffect } from 'react';
import styles from './gallery.module.css'
import GallerySlider from './GallerySlider';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Gallery() {
    const { t } = useTranslation();
    const control = useAnimation()
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }  
    
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
    }, [control, inView]);

    return (
        <motion.div ref={ref} 
            variants={boxVariant} initial="hidden"
            animate={control} className={styles.gallery_block} id='gallery'>
            <div className={styles.gallery_container}>
                <div className={styles.gallery__d_f}>
                    <div className={styles.gallery__item}>
                        <h3 className={styles.europeFont}>{ t("gallery").toLocaleUpperCase() }</h3>
                    </div>
                    <div className={styles.gallery__item}>
                        <GallerySlider/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
