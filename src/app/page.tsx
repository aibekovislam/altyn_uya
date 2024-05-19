'use client'

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
import { useRouter } from "next/navigation";
import './i18n';
import 'animate.css';
import { useTranslation } from "react-i18next";
import Image from "next/image";

const europeFont = localFont({
  src: './assets/font/europeext_bold.otf',
  display: 'swap'
})

function Home() {
  const { t } = useTranslation();
  const navigate = useRouter();

  return (
    <>
      <main className={styles.main}>
          <Navbar/>
          <div className='container'>
              <div className={styles.title_and_carousel}>
                <h1 className={`${styles.main_title} ${europeFont.className} animate__animated animate__fadeInDown`}>
                  { t("qurban_title") }
                </h1>
                <MainCarousel/>
                <div className={styles.additional__info}>
                  <h2 className={`${styles.additional__heading_text} animate__animated animate__fadeInDown`}>{ t("title1") }</h2>
                  <p className={`${styles.additional__heading_description} animate__animated animate__fadeInDown`}>{ t("title2") }</p>
                  <div className={`${styles.additional__heading_small_text} animate__animated animate__fadeInDown`}>
                    { t("title3") }
                  </div>
                  <button className={`${styles.additional__heading_btn} animate__animated animate__fadeInDown`} onClick={() => navigate.push('/form')}>{ t("btn_charity") }</button>
                  <span className={styles.small__text}>{ t("title4") }</span>
                </div>
              </div>
              <div className={`${styles.float__btn_video} animate__animated animate__fadeIn`}>
                  {t("video_title")}
                <Image src={video_svg.src} alt="video player" width={60} height={60} />
              </div>
              <div className={`${styles.social__medias} animate__animated animate__fadeIn`}>
                <Image src={google.src} alt="google logo" width={45} height={35} />
                <Image src={facebook.src} alt="facebook logo" width={35} height={35} />
                <Image src={instagram.src} alt="instagram logo" width={35} height={35} />
                <Image src={whatsapp.src} priority={true} alt="whatsapp logo" width={35} height={35} />
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
      <a href="#" className={'float_whatsapp'}>
        <Image src={whatsapp.src} alt="whatsapp float link" width={35} height={35} className={'float_img_link'} />
      </a>
    </>
  );
}

export default Home;