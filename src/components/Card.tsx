import React from 'react';
import styles from '../app/styles/card.module.css';

export default function Card({ firstPost }: any) {
  return (
    <div className={styles.card}>
        <img src={firstPost.image} className={styles.card_img}/>
        <p className={styles.card_description}>{ firstPost.main_text_kg } – { firstPost.text_kg }</p>
        <button className={styles.card_btn}>Пожертвовать</button>
    </div>
  )
}
