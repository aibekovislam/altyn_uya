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
import Loading from '@/app/Loading';
import Image from 'next/image';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <img src={arrow_next.src} className={className} style={{ ...style, width: "40px", height: "40px", right: "-35px" }} onClick={onClick} alt='arrow next' />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <img src={arrow_prev.src} className={className} style={{ ...style, width: "40px", height: "40px", left: "-40px"}} onClick={onClick} alt='arrow previus' />
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
        carouselImages?.length !== 0 ? (
          <div className={`${styles.slider_container} animate__animated animate__fadeInDown`}>
            <Slider {...settings}>
              { carouselImages?.map((item, index) => (
                <div key={index} className={styles.carousel__item}>
                  <Image src={`${item.image}`} width={355} height={295} priority={true} alt={`card_image_${index}`} className={styles.carousel__item_img} />
                </div>
              )) }
            </Slider>
          </div>
        ) : (
          <div className={styles.loading_block}>
            <Loading/>
          </div>
        )
    );
}