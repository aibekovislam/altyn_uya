"use client"

import { useEffect } from 'react';
import styles from './gallery.module.css'
import ReportSlider from './ReportSlider';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Report() {
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
        animate={control} className={styles.gallery_block}>
            <div className='container'>
                <div className={styles.gallery__d_f}>
                    <div className={styles.gallery__item}>
                        <h3 className={styles.europeFont} style={{ textAlign: "right" }}>ОТЧЕТ</h3>
                    </div>
                    <div className={styles.gallery__item}>
                        <ReportSlider/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
