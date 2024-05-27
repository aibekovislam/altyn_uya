"use client"

import React, { useEffect, useState } from 'react';
import styles from './gallery.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import arrow_next from '../../../app/assets/svgs/slider/arrow_next.svg';
import arrow_prev from '../../../app/assets/svgs/slider/arrow_prev.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchGallery } from '@/app/redux/features/main-carousel-image/galleryCarousel';
import { API_URL } from '@/utils/consts';
import dots from '../../../app/assets/svgs/dots.svg';
import active_dots from '../../../app/assets/svgs/active_dots.svg';
import { PhotoProvider, PhotoView } from 'react-photo-view';

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_next.src} className={`${className} ${styles.next}`} style={{ ...style, width: "40px", height: "40px", top: "100%" }} onClick={onClick} alt='arrow next' />
    );
  }
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_prev.src} className={`${className} ${styles.prev}`} style={{ ...style, width: "40px", height: "40px", top: "100%"}} onClick={onClick} alt='arrow previus' />
    );
}  

export default function GallerySlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const gallery = useSelector((state: RootStates) => state.gallery.galleryImages);
    const dispatch = useDispatch<any>()
    
    useEffect(() => {
        dispatch(fetchGallery())
    }, [dispatch])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: true,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "60px",
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
                swipe: true,
                customPaging: (i: any) => (
                    <div className="ft-slick__dots--custom">
                        <img src={i === activeSlide ? active_dots.src : dots.src} alt='dots' />
                    </div>
                )
              }
            },
        ],      
    };
    
    return (
        <section className={styles.gallery_slider}>
            <PhotoProvider>
                <Slider 
                    {...settings} 
                    afterChange={(index) => setActiveSlide(index)}
                >
                    { gallery?.map((item: any, index: number) => (
                        <div className={styles.gallery_img_block} key={index}>
                            <img src={`${item.image}`} alt='gallery'/>
                        </div>
                    )) }
                </Slider>
            </PhotoProvider>
        </section>
    )
}
