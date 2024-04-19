import React from 'react';
import styles from './footer.module.css';
import logo_big from '../../app/assets/svgs/Group 812.svg';
import arrowDown from '../../app/assets/ask_and_questions/Group 183 (2).svg';
import arrowUp from '../../app/assets/ask_and_questions/Group 183 (1).svg';
import { useRouter } from 'next/navigation';
import notification from '../../app/assets/svgs/social_media/notification.svg';
import google from '../../app/assets/svgs/social_media/google.svg';
import whatsapp from '../../app/assets/svgs/social_media/whatsapp.svg';
import instagram from '../../app/assets/svgs/social_media/instagram.svg';
import facebook from '../../app/assets/svgs/social_media/facebook.svg';
import phone from '../../app/assets/svgs/social_media/Vector (25).svg';

export default function FooterAsk() {
    const navigate = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className={styles.footer_ask_block}>
            <div className={styles.shadow}></div>
            <div className='container' style={{ position: "relative", zIndex: 3, padding: "50px", display: "flex", flexDirection: "column", rowGap: "60px" }}>
                <div className={styles.footer_d_f}>
                    <div className={styles.contact_us_block_ask}>
                        <div className={styles.contact_us_number}><div><img src={phone.src} alt='phone' /></div> +996777377736</div>
                        <div className={styles.contact_us_whatsapp}><div><img src={whatsapp.src} alt='whatsapp' /></div> +996773444499</div>
                        <div className={styles.contact_us_instagram}><div><img src={instagram.src} alt='instagram' /></div> altyn_uya_fond</div>
                        <div className={styles.contact_us_facebook}><div><img src={facebook.src} alt='facebook' /></div> Алтын Уя Коомдук Фонду</div>
                        <div className={styles.contact_us_gmail}><div><img src={google.src} alt='google' /></div> altynuyakg@gmail.com</div>
                    </div>
                    <div className={styles.footer_info_ask}>
                        <img src={logo_big.src} className={styles.logo_ask} />
                        <div className={styles.dop_text_ask}>Биздин ушул Qurban.org сайты аркылуу “билдирме” таштасаңыз болот.</div>
                        <button><img src={notification.src} alt='notification btn' /> Билдирме</button>
                    </div>
                </div>
                <div className={styles.footer_under}>
                    <div className={styles.back_block_ask} onClick={() => navigate.push('/')}>
                        <img src={arrowDown.src} alt='back arrow' className={styles.arrow_back_img_ask} />
                        <span>Назад</span>
                    </div>
                    <p>Ошондой эле, Бишкек шаары, Мичурин көчөсү 80 (Жибек-Жолу/Эркиндик бульвары тарап) дареги боюнча жайгашкан Фонддун кеңсесине келип, кызматкерлерге жекеме-жеке жолугуу мүмкүн.</p>
                    <div className={styles.contact_us}>altynuyakg@gmail.com</div>
                    <div className={styles.up_block} onClick={scrollToTop}>
                        <img src={arrowUp.src} alt='back arrow' className={styles.arrow_back_img} />
                        <span>Вверх</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
