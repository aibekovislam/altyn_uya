'use client'

import React, { useEffect, useState } from 'react';
import styles from '../../app/styles/page.module.css';
import arrowBack from '../../app/assets/svgs/arrow_back.svg';
import Form from '@/components/Form/Form';
import arrowDown from '../../app/assets/svgs/arrow_down.svg';
import demirbank from '../assets/svgs/billings/Demirbank.svg';
import optima from '../assets/svgs/billings/optima.svg';
import mbank from '../assets/svgs/billings/mbank.svg';
import kicb from '../assets/svgs/billings/kicb.svg';
import ship from '../assets/Group 967.png'
import FooterAsk from '@/components/Footer/FooterAsk';
import FooterMain from '@/components/Footer/FooterMain';
import '../i18n'
import { useTranslation } from 'react-i18next';
import 'animate.css';
import Image from 'next/image';
import videImage from '../assets/video.png'

export default function page() {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const [ sendedForm, setSendedForm ] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className={styles.form_page}>
                <div className='container'>
                    <div className={styles.form_d_f}>
                        <h2 className={styles.form__title}>{ t("form").toLocaleUpperCase() }</h2>
                        <a href='/' style={{ textDecoration: "none", color: "black" }} className={styles.back_block_ask}>
                            <Image width={20} height={20} src={arrowBack.src} alt='back arrow' className={styles.arrow_back_img_ask} />
                            <span>{ t("back") }</span>
                        </a>
                        <div className={styles.form_and_video}>
                            <div className={styles.form__item} style={ sendedForm ? { width: "100%" } : {} }>
                                <Form />
                            </div>
                            { sendedForm ? (null) : (
                                <div className={styles.form_and_video__item}>
                                    <img src={'https://s3-alpha-sig.figma.com/img/204d/f11b/2f0b2a822e5d87ac75ad067ee865c240?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYUj8ZBIE~LSmhJrvwlA~vEnrk4FomaiXH8WueyxgZTQs9OJT9OO3xQzvIbaK~It8qaRKGtc-Wm3DBAVVYQLceCKZ7bN08Qp6gJ2dezlFg1m8yEMOk4p~PcdMQrdgK7yBa7Km5TgrV~dtrjyUSQs6-ZLIJNQs7X-YyQs~toyuiN-dea~3rWNsNtUks6Op05oYLcMRXEiJIOl5SJSIzfFzbYakmQxXLi1vWE2EZzgbwxV8Rz-D5M4upCNSpa4~mlsorumnGiIHSRJPiS3Ng4cGGgwG8-~ZkOpKRcwIFaL-tlbRnmxoJupCIhrIZiixgYq7Xk-ckBob4y96lTC7AWN0Q__'} className={styles.form_page_img} alt='image' />
                                    {/* <video></video> */}
                                </div>
                            ) }
                        </div>
                    </div>
                    <div className={styles.arrow_down}>
                        <Image src={arrowDown.src} width={25} height={35} alt='arrow down svg' />
                    </div>
                </div>
            </section>
            <section className={styles.billing_block}>
                <div className='container'>
                    <div className={styles.billing_d_f}>
                    <div className={styles.billing__title}>
                        <h3>{ t("form_title1") }</h3>
                    </div>
                    <div className={styles.billings}>
                        <div className={styles.billing}>
                            <div className={styles.billing_img}>
                                <Image src={demirbank.src} width={0} height={0} alt='demirbank' />
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
                                <Image src={optima.src} width={0} height={0} alt='optima' />
                            </div>
                            <div className={styles.requisite_info}>
                                <span>Мультивалютный</span>
                                <span>1092407555410128</span> 
                            </div>
                        </div>
                        <div className={styles.billing}>
                            <div className={styles.billing_img}>
                                <Image src={mbank.src} width={0} height={0} alt='mbank' />
                            </div>
                            <div className={styles.requisite_info}>
                                <span>1030120000697624</span> 
                            </div>
                        </div>
                        <div className={styles.billing}>
                            <div className={styles.billing_img}>
                                <Image src={kicb.src} width={0} height={0} alt='kicb' />
                            </div>
                            <div className={styles.requisite_info}>
                                <span>1280190000194449</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.arrow_down} style={ isMobile ? { display: "none" } : {} }>
                    <Image src={arrowDown.src} width={25} height={35} alt='arrow down svg' />
                </div>
            </section>
            <section className={styles.address_info}>
                <div className='container'>
                    <div className={styles.address_d_f}>
                        <div className={styles.address_info_img}>
                            <Image src={ship.src} width={415} height={385} alt='ship image' />
                        </div>
                        <p className={styles.address_info_text}>{ t("footer_text1") }</p>
                    </div>
                </div>
            </section>
            { isMobile ? (
                <FooterMain/>
            ) : (
                <FooterAsk/>
            ) }
        </>
    )
}
