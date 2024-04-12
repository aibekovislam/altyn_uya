"use client"

import React from 'react';
import styles from '../app/styles/gallery.module.css'
import GallerySlider from './GallerySlider';

export default function Gallery() {
    return (
        <div className={styles.gallery_block}>
            <div className='container'>
                <div className={styles.gallery__d_f}>
                    <div className={styles.gallery__item}>
                        <h3 className={styles.europeFont}>ГАЛЛЕРЕЯ</h3>
                    </div>
                    <div className={styles.gallery__item}>
                        <GallerySlider/>
                    </div>
                </div>
            </div>
        </div>
    )
}
