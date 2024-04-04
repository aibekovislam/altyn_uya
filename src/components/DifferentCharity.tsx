'use client'

import React, { useEffect } from 'react';
import styles from '../app/styles/different_charity.module.css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchFirstPosts } from '@/app/redux/features/cards/postSlice';

export default function DifferentCharity() {
  const firstPosts = useSelector((state: RootStates) => state.posts.firstPosts);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchFirstPosts());
  }, [])


  return (
    <section className={styles.different_charity}>
      <div className='container'>
        <div className={styles.d_f_charity}>
          <div className={styles.different_charity_title}>
            КУРМАНДЫКТЫН ТҮРЛӨРҮ
          </div>
          <div className={styles.card_block}>
            { firstPosts?.map((item: any) => (
              <Card firstPost={item}/>
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}
