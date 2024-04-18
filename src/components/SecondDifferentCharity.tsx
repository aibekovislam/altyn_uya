'use client'

import React, { useEffect } from 'react';
import styles from '../app/styles/different_charity.module.css';
import Card from './MainCard/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchSecondPosts } from '@/app/redux/features/cards/postSlice';
import google from '../app/assets/svgs/social_media/google_plus.svg';
import facebook from '../app/assets/svgs/social_media/facebook_blue.svg';
import instagram from '../app/assets/svgs/social_media/instagram_blue.svg';
import whatsapp from '../app/assets/svgs/social_media/whatsapp_blue.svg';
import arrowDown from '../app/assets/svgs/arrow_down.svg';


export default function SecondDifferentCharity() {
  const posts = useSelector((state: RootStates) => state.posts.secondPosts);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchSecondPosts());
  }, [])

  console.log(posts)

  return (
    <section className={styles.second_different_charity} id='different_charity'>
      <div className='container'>
        <div className={styles.second_d_f_charity}>
          <div className={styles.second_different_charity_title}>
            ШЫПАА КУРМАНДЫГЫ
          </div>
          <div className={styles.second_card_block}>
            { posts?.map((item: any, index: number) => (
              <div className={styles[`second_card_index_${index}`]} key={index}>
                <Card firstPost={item}/>
              </div>
            )) }
          </div>
          <div className={styles.social_media_block}>
            <div className={styles.social_media}>
              <img src={google.src} alt='google_plus' />
              <img src={facebook.src} alt='facebook' />
              <img src={instagram.src} alt='instagram' />
              <img src={whatsapp.src} alt='whatsapp' />
            </div>
            <div className={styles.email}>www.altynuya@altynuya.org</div>
          </div>
        </div>
      </div>
      <div className={styles.arrow_down}>
        <img src={arrowDown.src} />
      </div>
    </section>
  )
}
