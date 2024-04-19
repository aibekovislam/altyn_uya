'use client'

import React, { useEffect, useState } from 'react';
import styles from '../app/styles/different_charity.module.css';
import Card from './MainCard/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchFirstPosts } from '@/app/redux/features/cards/postSlice';
import Slider from 'react-slick';
import arrow_next from '../app/assets/svgs/slider/arrow_next.svg';
import arrow_prev from '../app/assets/svgs/slider/arrow_prev.svg';
import dots from '../app/assets/svgs/dots.svg';
import active_dots from '../app/assets/svgs/active_dots.svg';

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
  const dispatch = useDispatch<any>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    dispatch(fetchFirstPosts());
  }, [])

  var settings = {
      dots: true,
      infinite: false,
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

  return (
    <section className={styles.different_charity} id='different_charity'>
      <div className='container'>
        <div className={styles.d_f_charity}>
          <div className={styles.different_charity_title}>
            КУРМАНДЫКТЫН ТҮРЛӨРҮ
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
          { firstPosts?.map((item: any, index: number) => (
            <div className={styles.card_mobile_slider_item} key={index}>
              <Card firstPost={item}/>
            </div>
          )) }
        </Slider>
        </div>
    </section>
  )
}
