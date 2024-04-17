'use client'

import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './slider.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchMainImagesCarousel } from '@/app/redux/features/main-carousel-image/carouselSlice';
import arrow_next from '../../app/assets/svgs/slider/arrow_next.svg';
import arrow_prev from '../../app/assets/svgs/slider/arrow_prev.svg';
import { API_URL } from '@/utils/consts';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <img src={arrow_next.src} className={className} style={{ ...style, width: "40px", height: "40px", right: "-35px" }} onClick={onClick} />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <img src={arrow_prev.src} className={className} style={{ ...style, width: "40px", height: "40px", left: "-40px"}} onClick={onClick} />
  );
}  

export default function MainCarousel() {
    const carouselImages = useSelector((state: RootStates) => state.mainImagesCarousel.mainImages);
    const dispatch = useDispatch<any>();

    useEffect(() => {
      dispatch(fetchMainImagesCarousel())
    }, [])
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className={styles.slider_container}>
          <Slider {...settings}>
            { carouselImages?.map((item, index) => (
              <div key={index} className={styles.carousel__item}>
                <img src={`${API_URL}/${item.image.slice(16)}`} className={styles.carousel__item_img} />
              </div>
            )) }
          </Slider>
        </div>
    );
}