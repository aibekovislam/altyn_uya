'use client'

import React, { useEffect } from 'react';
import styles from './footer.module.css';
import logo_big from '../../app/assets/svgs/Group 812.svg'
import LogoSVG from '../../app/assets/svgs/navbar/Group 649.svg';
import google from '../../app/assets/svgs/social_media/google.svg';
import whatsapp from '../../app/assets/svgs/social_media/whatsapp.svg';
import instagram from '../../app/assets/svgs/social_media/instagram.svg';
import facebook from '../../app/assets/svgs/social_media/facebook.svg';
import phone from '../../app/assets/svgs/social_media/Vector (25).svg';
import shadow from '../../app/assets/Rectangle 259.png';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FooterMain() {
    const navigate = useRouter();
    const { t } = useTranslation();
    const control = useAnimation()
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }  
    
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
    }, [control, inView]);

    return (
        <motion.footer ref={ref} 
        variants={boxVariant} initial="hidden"
        animate={control} id='footer' className={styles.footer}>
            <div className='container'>
                <div className={styles.d_f_footer}>
                    <div className={styles.contact_us_block}>
                        <div className={styles.contact_us_title}>{ t("footer_text2") }:</div>
                        <div className={styles.contact_us_number}><img src={phone.src} alt='phone' />+996777377736</div>
                        <div className={styles.contact_us_whatsapp}><img src={whatsapp.src} alt='whatsapp' />+996773444499 </div>
                        <div className={styles.contact_us_instagram}><img src={instagram.src} alt='instagram' />altyn_uya_fond</div>
                        <div className={styles.contact_us_facebook}><img src={facebook.src} alt='facebook' />Алтын Уя Коомдук Фонду</div>
                        <div className={styles.contact_us_gmail}><img src={google.src} alt='google plus' />altynuyakg@gmail.com</div>
                    </div>
                    <div className={styles.footer_info}>
                        <p>{ t("footer_text1") }</p>
                        <img src={logo_big.src} className={styles.logo} alt='big logo Алтын уя' />
                        <div className={styles.dop_text}>{ t("footer_text3") }</div>
                        <button onClick={() => navigate.push('/form')}>{ t("notification") }</button>
                    </div>
                </div> 
                <div className={styles.d_f_footer_mobile}>
                    <img src={shadow.src} alt='shadow background' className={styles.shadow__mobile} />
                    <img src={LogoSVG.src} alt='logo' />
                    <div className={styles.contact_us_mobile}>
                        <span className={styles.footer_title_mobile}>{ t("footer_text2") }:</span>
                        <span className={styles.footer_phone_mobile}>+996777377736</span>
                        <div className={styles.social__medias_mobile}>
                            <img src={google.src} alt='google' />
                            <img src={facebook.src} alt='facebook' />
                            <img src={instagram.src} alt='instagram' />
                            <img src={whatsapp.src} alt='whatsapp' />
                        </div>
                        <div className={styles.info}>
                            { t("footer_text3") } 
                        </div>
                        <button onClick={() => navigate.push('/form')}>{ t("notification") }</button>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
