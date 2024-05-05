'use client'

import React from 'react';
import styles from './card.module.css';
import charitySVG from '../../app/assets/svgs/charity_svg.svg';
import { API_URL } from '@/utils/consts';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { getMainTextByLanguage, getTextByLanguage } from '@/app/helpers/lngEffect';
import Image from 'next/image';

export default function Card({ firstPost }: any) {
  const navigate = useRouter();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <div className={styles.card}>
        <Image src={`${API_URL}/${firstPost.image.slice(16)}`} width={400} height={235} priority={true} alt={getMainTextByLanguage(firstPost, currentLanguage)} className={styles.card_img}/>
        <p className={styles.card_description}><span className={styles.main_text_card}>{getMainTextByLanguage(firstPost, currentLanguage)}</span> – {getTextByLanguage(firstPost, currentLanguage)}</p>
        <div className={styles.d_f_btn} onClick={() => navigate.push('/form')}>
          <button className={styles.card_btn}><img src={charitySVG.src} alt={`Пожертвовать Алтын уя ${getMainTextByLanguage(firstPost, currentLanguage)}`} /> {t("btn_charity")}</button>
        </div>
    </div>
  )
}
