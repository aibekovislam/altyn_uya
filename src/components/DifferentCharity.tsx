'use client'

import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from '../app/styles/different_charity.module.css';
import Card from './MainCard/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchFirstPosts, fetchSecondPosts } from '@/app/redux/features/cards/postSlice';
import Slider from 'react-slick';
import arrow_next from '../app/assets/svgs/slider/arrow_next.svg';
import arrow_prev from '../app/assets/svgs/slider/arrow_prev.svg';
import dots from '../app/assets/svgs/dots.svg';
import active_dots from '../app/assets/svgs/active_dots.svg';
import { useTranslation } from 'react-i18next';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <img src={arrow_next.src} className={className} style={{ ...style, width: "40px", height: "40px", right: "5px", zIndex: 10 }} onClick={onClick} />    
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
      <img src={arrow_prev.src} className={className} style={{ ...style, width: "40px", height: "40px", left: "5px", zIndex: 10 }} onClick={onClick} />
  );
}  

export default function DifferentCharity() {
  const firstPosts = useSelector((state: RootStates) => state.posts.firstPosts);
  const secondPosts = useSelector((state: RootStates) => state.posts.secondPosts);
  const dispatch = useDispatch<any>();
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    dispatch(fetchFirstPosts());
    if(secondPosts.length === 0) {
      dispatch(fetchSecondPosts());
    }
  }, [])

  
  var settings = {
      dots: true,
      infinite: true,
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
  };

  const [isMobile, setIsMobile] = useState(() => {
      if(typeof window !== 'undefined') {
          return window.innerWidth < 570
      }
  });

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 570);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      className={`${styles.different_charity}`}
      style={ isMobile ? {marginTop: "0px"} : {} } 
      id='different_charity'
    >
      <div className='container'>
        <div className={styles.d_f_charity}>
          <div className={styles.different_charity_title}>
            { t("different_charity") }
          </div>
          <div className={styles.card_block}>
            { firstPosts?.map((item: any, index: number) => (
              <div className={styles[`card_index_${index}`]} key={index}>
                <Card firstPost={item}/>
              </div>
            )) }
          </div>
        </div>
      </div>
      <div className={styles.mobile__card_block}>
        <Slider {...settings} afterChange={(index) => setActiveSlide(index)}>
          { [...firstPosts, ...secondPosts]?.map((item: any, index: number) => (
            <div className={styles.card_mobile_slider_item} key={index}>
              <Card firstPost={item}/>
            </div>
          )) }
        </Slider>
        </div>
    </motion.section>
  )
}
