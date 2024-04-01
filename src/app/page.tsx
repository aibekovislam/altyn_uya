import Navbar from "@/components/Navbar";
import styles from "./styles/page.module.css";
import MainCarousel from "@/components/MainCarousel";
import localFont from 'next/font/local';

const europeFont = localFont({
  src: './assets/font/europeext_bold.otf',
  display: 'swap'
})

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.container}>
          <div className={styles.title_and_carousel}>
            <h1 className={`${styles.main_title} ${europeFont.className}`}>
              QURBAN
            </h1>
            <MainCarousel/>
          </div>
      </div>
    </main>
  );
}
