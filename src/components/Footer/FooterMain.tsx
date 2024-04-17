import React from 'react';
import styles from './footer.module.css';
import logo_big from '../../app/assets/svgs/Group 812.svg'

export default function FooterMain() {
  return (
    <section id='footer' className={styles.footer}>
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
        </div>
    </section>
  )
}
