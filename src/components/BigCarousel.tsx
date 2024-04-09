'use client'

import React, { useEffect } from 'react';
import styles from '../app/styles/slider.module.css';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchBigCarouselImages } from '@/app/redux/features/main-carousel-image/bigCarousel';

export default function BigCarousel() {
    const bigImages = useSelector((state: RootStates) => state.bigCarousel.bigCarousel);
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchBigCarouselImages());
    }, [dispatch])
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    console.log(bigImages)
    
    return (
        <section className={styles.big_carousel}>
            <div className='container slider-container'>
                <Slider { ...settings } >
                    { bigImages?.map((item: any, index: number) => (
                        <div className={styles.big_img_carousel} key={index}>
                            <img src={item.image} className={styles.big_img} alt={item.main_text} />
                        </div>
                    )) }
                </Slider>
            </div>
        </section>
    )
}
