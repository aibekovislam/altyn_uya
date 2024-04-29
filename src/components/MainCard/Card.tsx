'use client'

import React from 'react';
import styles from './card.module.css';
import charitySVG from '../../app/assets/svgs/charity_svg.svg';
import { API_URL } from '@/utils/consts';
import { useRouter } from 'next/navigation';

export default function Card({ firstPost }: any) {
  const navigate = useRouter();
  return (
    <div className={styles.card}>
        <img src={`${API_URL}/${firstPost.image.slice(16)}`} className={styles.card_img}/>
        <p className={styles.card_description}><span className={styles.main_text_card}>{ firstPost.main_text_kg }</span> – { firstPost.text_kg }</p>
        <div className={styles.d_f_btn} onClick={() => navigate.push('/form')}>
          <button className={styles.card_btn}><img src={charitySVG.src} /> Пожертвовать</button>
        </div>
    </div>
  )
}
