import Navbar from "@/components/Navbar/Navbar";
import styles from "./styles/page.module.css";
import MainCarousel from "@/components/Carousel/MainCarousel";
import localFont from 'next/font/local';
import video_svg from './assets/svgs/video_alt.svg';
import google from './assets/svgs/social_media/google.svg';
import facebook from './assets/svgs/social_media/facebook.svg';
import instagram from './assets/svgs/social_media/instagram.svg';
import whatsapp from './assets/svgs/social_media/whatsapp.svg';
import AboutUsSection from "@/components/AboutUsSection";
import DifferentCharity from "@/components/DifferentCharity";
import BigCarousel from "@/components/Carousel/BigCarousel";
import SecondDifferentCharity from "@/components/SecondDifferentCharity";
import Gallery from "@/components/Carousel/GalleryCarousel/Gallery";
import Faq from "@/components/Faq";
import Report from "@/components/Carousel/GalleryCarousel/Report";
import FooterMain from "@/components/Footer/FooterMain";

const europeFont = localFont({
  src: './assets/font/europeext_bold.otf',
  display: 'swap'
})

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar/>
        <div className='container'>
            <div className={styles.title_and_carousel}>
              <h1 className={`${styles.main_title} ${europeFont.className}`}>
                QURBAN
              </h1>
              <MainCarousel/>
              <div className={styles.additional__info}>
                <h3 className={styles.additional__heading_text}>Курмандык бул – Аллахтын буйругу!</h3>
                <p className={styles.additional__heading_description}>Себеби Аллах Таала Пайгамбарыбызга (с.а.в) буйрук кылып айткан: "Эй, Мухаммад! Роббиң үчүн намаз оку жана жандык сой!".</p>
                <div className={styles.additional__heading_small_text}>
                  (Кавсар сүрөөсү, 2-аят) 
                </div>
                <button className={styles.additional__heading_btn}>Пожертвовать</button>
                <span className={styles.small__text}>Бул сайт аркылуу курмандык чалдырып, муктаждарга жардам берсеңиз болот.</span>
              </div>
            </div>
            <div className={styles.float__btn_video}>
              Презентационный ролик
              <img src={video_svg.src} />
            </div>
            <div className={styles.social__medias}>
              <img src={google.src} />
              <img src={facebook.src} />
              <img src={instagram.src} />
              <img src={whatsapp.src} />
            </div>
        </div>
      </main>
      <AboutUsSection/>
      <DifferentCharity/>
      <BigCarousel/>
      <SecondDifferentCharity/>
      <Gallery/>
      <Faq/>
      <Report/>
      <FooterMain/>
    </>
  );
}
