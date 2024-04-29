"use client"

import React from 'react';
import styles from './gallery.module.css'
import GallerySlider from './GallerySlider';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const { t } = useTranslation();

    return (
        <div className={styles.gallery_block} id='gallery'>
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
        </div>
    )
}
