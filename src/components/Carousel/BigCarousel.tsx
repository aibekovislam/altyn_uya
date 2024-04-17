'use client'

import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './slider.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import arrow_next from '../../app/assets/svgs/slider/arrow_next.svg';
import arrow_prev from '../../app/assets/svgs/slider/arrow_prev.svg';
import { fetchBigCarouselImages } from '@/app/redux/features/main-carousel-image/bigCarousel';
import { API_URL } from '@/utils/consts';


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_next.src} className={className} style={{ ...style, width: "40px", height: "40px", right: "20px", zIndex: 10 }} onClick={onClick} />    
    );
  }
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_prev.src} className={className} style={{ ...style, width: "40px", height: "40px", left: "20px", zIndex: 10 }} onClick={onClick} />
    );
}  

export default function BigCarousel() {
    const bigImages = useSelector((state: RootStates) => state.bigCarousel.bigCarousel);
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchBigCarouselImages());
    }, [dispatch])
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    console.log(bigImages)
    
    return (
        <section className={styles.big_carousel}>
            <div className='slider-container'>
                <Slider { ...settings } >
                    { bigImages?.map((item: any, index: number) => (
                        <div className={styles.big_img_carousel} key={index}>
                            <img src={`${API_URL}/${item.image.slice(16)}`} className={styles.big_img} alt={item.main_text} />
                            <div className={styles.carousel_content}>
                                <div className={styles.main__text}>{ item.main_text_kg }</div>
                                <p className={styles.main_description}>{ item.text_kg }</p>
                            </div>
                        </div>
                    )) }
                </Slider>
            </div>
        </section>
    )
}
