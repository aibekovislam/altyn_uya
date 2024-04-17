"use client"

import styles from './gallery.module.css'
import ReportSlider from './ReportSlider';

export default function Report() {
    return (
        <div className={styles.gallery_block}>
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
        </div>
    )
}
