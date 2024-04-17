"use client"

import React, { useEffect } from 'react';
import styles from '../app/styles/gallery.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import arrow_next from '../app/assets/svgs/slider/arrow_next.svg';
import arrow_prev from '../app/assets/svgs/slider/arrow_prev.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchGallery } from '@/app/redux/features/main-carousel-image/galleryCarousel';
import { fetchReport } from '@/app/redux/features/main-carousel-image/reportSlice';
import { API_URL } from '@/utils/consts';

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_next.src} className={className} style={{ ...style, width: "40px", height: "40px", top: "100%" }} onClick={onClick} />
    );
  }
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_prev.src} className={className} style={{ ...style, width: "40px", height: "40px", top: "100%"}} onClick={onClick} />
    );
}  

export default function ReportSlider() {
    const reports = useSelector((state: RootStates) => state.reports.reports);
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchReport())
    }, [dispatch])

    console.log(reports)

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
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <section className={styles.gallery_slider}>
            <Slider {...settings}>
                { reports?.map((item: any, index: number) => (
                    <div className={styles.gallery_img_block} key={index}>
                        <img src={`${API_URL}/${item.image.slice(16)}`} alt='gallery'/>
                    </div>
                )) }
            </Slider>
        </section>
    )
}
