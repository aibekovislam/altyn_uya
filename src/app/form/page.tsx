'use client'

import React from 'react';
import styles from '../../app/styles/page.module.css';
import arrowBack from '../../app/assets/svgs/arrow_back.svg';
import { useRouter } from 'next/navigation';
import Form from '@/components/Form/Form';
import arrowDown from '../../app/assets/svgs/arrow_down.svg';
import demirbank from '../assets/svgs/billings/Demirbank.svg';
import optima from '../assets/svgs/billings/optima.svg';
import mbank from '../assets/svgs/billings/mbank.svg';
import kicb from '../assets/svgs/billings/kicb.svg';
import ship from '../assets/Group 967.png'
import FooterAsk from '@/components/Footer/FooterAsk';

export default function page() {
    const navigate = useRouter();
    return (
        <>
            <section className={styles.form_page}>
                <div className='container'>
                    <div className={styles.form_d_f}>
                        <h2 className={styles.form__title}>АНКЕТА</h2>
                        <div className={styles.back_block_ask} onClick={() => navigate.push('/')}>
                            <img src={arrowBack.src} alt='back arrow' className={styles.arrow_back_img_ask} />
                            <span>Назад</span>
                        </div>
                        <div className={styles.form_and_video}>
                            <div className={styles.form__item}>
                                <Form/>
                            </div>
                            <div className={styles.form_and_video__item}>
                                <img src={'https://s3-alpha-sig.figma.com/img/204d/f11b/2f0b2a822e5d87ac75ad067ee865c240?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cyL4o11lHtsgjFhBWlw-ku7bT2OYXE~DfSzzl-hGZ4dGklLgMwMJZFAN2DpZED9w3YhrANtBCO8KaCZvEa3SdT-KdASkWONQ80e2R~xW8V9w526y0FaNU-itjwjDaLhMJb8FJlvPD106kmq1T0bqmuTcAKsXx0T4c0mjZ440zRXKeGQ7Lz4urYZQhO2ubG9uQhVtLkkDHS6tbGjNHhjXnhS~wlYhfiClD4vZQQAGG1FdSgX9GqAhqrAF77uXQghFHe0L0XG6XVjrdv6GOmrSzbmbqSd6QLv8DRvqQenCznubfEBQoRVwmdNZtGVB8gdMJCCUJyiERpls-RTH~WrsQg__'} className={styles.form_page_img} alt='deleted img' />
                                {/* <video></video> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.arrow_down}>
                        <img src={arrowDown.src} />
                    </div>
                </div>
            </section>
            <section className={styles.billing_block}>
                <div className='container'>
                    <div className={styles.billing_d_f}>
                    <div className={styles.billing__title}>
                        <h3>КУРМАНДЫК МАЛЫНЫН АКЧАСЫН КОТОРУУ ҮЧҮН, ФОНДДУН РАСМИЙ РЕКВИЗИТТЕРИ:</h3>
                    </div>
                    <div className={styles.billings}>
                        <div className={styles.billing}>
                            <div className={styles.billing_img}>
                                <img src={demirbank.src} alt='demirbank' />
                            </div>
                            <div className={styles.requisite_info}>
                                <span>USD -1180000172923120</span>
                                <span>EUR -1180000172923221</span>
                                <span>RUB -1180000172923322</span>
                                <span>KZT -1180000172923423</span>
                                <span>KGS -1180000172923019</span> 
                            </div>
                        </div>
                        <div className={styles.billing}>
                            <div className={styles.billing_img}>
                                <img src={optima.src} alt='optima' />
                            </div>
                            <div className={styles.requisite_info}>
                                <span>Мультивалютный</span>
                                <span>1092407555410128</span> 
                            </div>
                        </div>
                        <div className={styles.billing}>
                            <div className={styles.billing_img}>
                                <img src={mbank.src} alt='mbank' />
                            </div>
                            <div className={styles.requisite_info}>
                                <span>1030120000697624</span> 
                            </div>
                        </div>
                        <div className={styles.billing}>
                            <div className={styles.billing_img}>
                                <img src={kicb.src} alt='kicb' />
                            </div>
                            <div className={styles.requisite_info}>
                                <span>1280190000194449</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.arrow_down}>
                    <img src={arrowDown.src} />
                </div>
            </section>
            <section className={styles.address_info}>
                <div className='container'>
                    <div className={styles.address_d_f}>
                        <div className={styles.address_info_img}>
                            <img src={ship.src} />
                        </div>
                        <p className={styles.address_info_text}>Ошондой эле, Бишкек шаары, <span>Мичурин көчөсү 80</span> (Жибек-Жолу/Эркиндик бульвары тарап) дареги боюнча жайгашкан Фонддун кеңсесине келип, кызматкерлерге жекеме-жеке жолугуу мүмкүн.</p>
                    </div>
                </div>
            </section>
            <FooterAsk/>
        </>
    )
}
