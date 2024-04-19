import React from 'react';
import styles from '../app/styles/about_us.module.css';
import altyn_logo from '../app/assets/svgs/logoAltyn.svg';
import pc from '../app/assets/svgs/pc.svg';
import mobile from '../app/assets/svgs/mobile.svg';
import arrowDown from '../app/assets/svgs/arrow_down.svg';

export default function AboutUsSection() {
    return (
        <section className={styles.about_us} id='about_us'>
            <div className='container'>
                <div className={styles.about_us__items}>
                    <div className={styles.about_us_title}>О нас</div>
                    <div className={styles.about_us_cards}>
                        <div className={styles.about_us_first_card}>
                            <div className={styles.block_about_us}>
                                <img src={altyn_logo.src} className={styles.cardImgSvg} />
                                <p className={styles.card_description}>“Алтын Уя” Коомдук Фонду ыктыярдуу мүлктүк салымдардын жардамы менен уюшулуп, 2020-жылдан бери элге кызмат көрсөтүп келет. Фонд социалдык, кайрымдуулук, билим берүү долбоорлорун ишке ашыруу аркылуу калктын аярлуу катмарына, жетим балдарга, муктаж үй-бүлөлөргө жардам көрсөтөт. Фонд тууралуу www.altynuya.org сайтынан толук маалымат алсаңыз болот. </p>
                            </div>
                        </div>
                        <div className={styles.about_us_second_card}>
                            <div className={styles.block_about_us}>
                                <img src={pc.src} className={styles.cardImgSvg} />
                                <p className={styles.card_description}>Qurban.org сайты – бул “Алтын Уя” Коомдук Фонду аркылуу курмандык чалдырууну каалаган ак көңүл байке-эжелер үчүн түзүлгөн аянтча. Максаты – Кыргызстанда жана чет өлкөлөрдө жүргөн мекендештерибиздин курмандык чалуу амалын жеңилдетүү, аларга так, тез жана ачык-айкын кызмат көрсөтүү.</p>
                            </div>
                        </div>
                        <div className={styles.about_us_third_card}>
                            <div className={styles.block_about_us}>
                                <img src={mobile.src} className={styles.cardImgSvg} />
                                <p className={styles.card_description}>www.qurban.org сайты аркылуу сиз өз убактыңызды коротпостон, тез арада курман чалдыра аласыз. Себеби бизде мал-жандык, мал союлчу жай, касапчылар жана курмандык этин муктаждарга тарата турчу, сообун сизге багыштай турчу кызматкерлер бар. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.arrow_down}>
                    <img src={arrowDown.src} />
                </div>
            </div>
        </section>
    )
}
