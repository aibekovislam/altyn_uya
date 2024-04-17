import React from 'react';
import styles from '../app/styles/card.module.css';
import charitySVG from '../app/assets/svgs/charity_svg.svg';
import { API_URL } from '@/utils/consts';

export default function Card({ firstPost }: any) {
  return (
    <div className={styles.card}>
        <img src={`${API_URL}/${firstPost.image.slice(16)}`} className={styles.card_img}/>
        <p className={styles.card_description}><span className={styles.main_text_card}>{ firstPost.main_text_kg }</span> – { firstPost.text_kg }</p>
        <div className={styles.d_f_btn}>
          <button className={styles.card_btn}><img src={charitySVG.src} /> Пожертвовать</button>
        </div>
    </div>
  )
}
