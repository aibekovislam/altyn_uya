import React from 'react';
import styles from './footer.module.css';
import logo_big from '../../app/assets/svgs/Group 812.svg'
import LogoSVG from '../../app/assets/svgs/navbar/Group 649.svg';
import google from '../../app/assets/svgs/social_media/google.svg';
import whatsapp from '../../app/assets/svgs/social_media/whatsapp.svg';
import instagram from '../../app/assets/svgs/social_media/instagram.svg';
import facebook from '../../app/assets/svgs/social_media/facebook.svg';
import shadow from '../../app/assets/Rectangle 259.png';

export default function FooterMain() {
  return (
    <footer id='footer' className={styles.footer}>
        <div className='container'>
            <div className={styles.d_f_footer}>
                <div className={styles.contact_us_block}>
                    <div className={styles.contact_us_title}>БИЗ МЕНЕН БАЙЛАНЫШУУ</div>
                    <div className={styles.contact_us_number}>+996777377736</div>
                    <div className={styles.contact_us_whatsapp}>+996773444499 </div>
                    <div className={styles.contact_us_instagram}>altyn_uya_fond</div>
                    <div className={styles.contact_us_facebook}>Алтын Уя Коомдук Фонду</div>
                    <div className={styles.contact_us_gmail}>altynuyakg@gmail.com</div>
                </div>
                <div className={styles.footer_info}>
                    <p>Ошондой эле, Бишкек шаары, Мичурин көчөсү 80 (Жибек-Жолу/Эркиндик бульвары тарап) дареги боюнча жайгашкан Фонддун кеңсесине келип, кызматкерлерге жекеме-жеке жолугуу мүмкүн.</p>
                    <img src={logo_big.src} className={styles.logo} />
                    <div className={styles.dop_text}>Биздин ушул Qurban.org сайты аркылуу “билдирме” таштасаңыз болот.</div>
                    <button>Билдирме</button>
                </div>
            </div> 
            <div className={styles.d_f_footer_mobile}>
                <img src={shadow.src} className={styles.shadow__mobile} />
                <img src={LogoSVG.src} alt='logo' />
                <div className={styles.contact_us_mobile}>
                    <span className={styles.footer_title_mobile}>БИЗ МЕНЕН БАЙЛАНЫШУУ:</span>
                    <span className={styles.footer_phone_mobile}>+996777377736</span>
                    <div className={styles.social__medias_mobile}>
                        <img src={google.src} alt='google' />
                        <img src={facebook.src} alt='facebook' />
                        <img src={instagram.src} alt='instagram' />
                        <img src={whatsapp.src} alt='whatsapp' />
                    </div>
                    <div className={styles.info}>
                        Биздин ушул Qurban.org сайты аркылуу “билдирме” таштасаңыз болот. 
                    </div>
                    <button>Билдирме</button>
                </div>
            </div>
        </div>
    </footer>
  )
}
