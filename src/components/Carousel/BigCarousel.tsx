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
import { useTranslation } from 'react-i18next';
import { getMainTextByLanguage, getTextByLanguage } from '@/app/helpers/lngEffect';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_next.src} className={className} style={{ ...style, width: "40px", height: "40px", right: "20px", zIndex: 10 }} onClick={onClick} alt='arrow next' />    
    );
  }
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_prev.src} className={className} style={{ ...style, width: "40px", height: "40px", left: "20px", zIndex: 10 }} onClick={onClick} alt='arrow previus' />
    );
}  

export default function BigCarousel() {
    const bigImages = useSelector((state: RootStates) => state.bigCarousel.bigCarousel);
    const dispatch = useDispatch<any>()
    const { t, i18n } = useTranslation();
    const control = useAnimation()
    const [ref, inView] = useInView()

    const currentLanguage = i18n.language;

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
        <motion.section
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className={styles.big_carousel}
        >
            <div className='slider-container'>
                <Slider { ...settings } >
                    { bigImages?.map((item: any, index: number) => (
                        <div className={styles.big_img_carousel} key={index}>
                            <img src={`${item.image}`} className={styles.big_img} alt={item.main_text} />
                            <div className={styles.carousel_content}>
                                <div className={styles.main__text}>{ getMainTextByLanguage(item, currentLanguage) }</div>
                                <p className={styles.main_description}>{ getTextByLanguage(item, currentLanguage) }</p>
                            </div>
                        </div>
                    )) }
                </Slider>
            </div>
        </motion.section>
    )
}
