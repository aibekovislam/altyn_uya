'use client'

import React, { useEffect } from 'react';
import styles from '../app/styles/different_charity.module.css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchFirstPosts } from '@/app/redux/features/cards/postSlice';

export default function SecondDifferentCharity() {
  const firstPosts = useSelector((state: RootStates) => state.posts.firstPosts);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchFirstPosts());
  }, [])


  return (
    <section className={styles.second_different_charity} id='different_charity'>
      <div className='container'>
        <div className={styles.second_d_f_charity}>
          <div className={styles.second_different_charity_title}>
            ШЫПАА КУРМАНДЫГЫ
          </div>
          <div className={styles.second_card_block}>
            { firstPosts?.map((item: any, index: number) => (
              <div className={styles[`second_card_index_${index}`]} key={index}>
                <Card firstPost={item}/>
              </div>
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}
