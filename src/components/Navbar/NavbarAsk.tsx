'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import KGLng from '../../app/assets/svgs/navbar/Group 173.svg';
import { NavbarProps } from './Navbar.props';
import { useRouter } from 'next/navigation';
import BurgerMenu from './BurgerMenu';
import burger_menu from '../../app/assets/svgs/navbar/burger_menu.svg';
import arrowBack from '../../app/assets/svgs/arrow_back.svg';
import Russia from '../../app/assets/svgs/russian.svg';
import English from '../../app/assets/svgs/english.svg';
import { useTranslation } from 'react-i18next';


export default function NavbarAsk({ selectedSection = 'Вопрос/ответ' }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [activeNavbar, setActiveItem] = useState(selectedSection);
  const navigate = useRouter();
  const [ openBurgerMenu, setOpenBurgerMenu ] = useState(false);
  const [language, setLanguage] = useState('Кыргызча');
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const currentLanguage = i18n.language

  const handleItemClick = (item: string, sectionId: string) => {
    setActiveItem(item);
    selectedSection = activeNavbar;
    smoothScroll(sectionId);
    if(item === 'Анкета') {
      navigate.push('/form')
    } else if(item === 'Вопрос/ответ') {
      navigate.push('/ask-and-question')
    } else if(item === 'Контакты') {
      return;
    } else {
      navigate.push('/')
    }
  };


  const smoothScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdown(!languageDropdown);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setLanguageDropdown(false);

    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <header className={styles.ask_block_navbar}>
      <div className='container'>
          <div className={styles.d_f_burger_menu}>
            <a href='/' style={{ textDecoration: "none", color: "black" }} className={styles.back_block_ask}>
              <img src={arrowBack.src} alt='back arrow' className={styles.arrow_back_img_ask} />
              <span>{ t("back") }</span>
            </a>
            <div className={styles.burder_menu} onClick={() => setOpenBurgerMenu(true)}>
              <img src={burger_menu.src} alt='burger menu' />
            </div>
          </div>
        <nav className={styles.navigation_ask}>
          { openBurgerMenu ? (
              <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu}/>
          ) : (null) }
          <div className={styles.links_wrapper}>
            <ul className={styles.navigation__links}>
              <a href='/' className={`${styles.navigation__link} ${activeNavbar === 'О нас' && styles.active_navbar}`}>{ t("about") }</a>
              <a className={`${styles.navigation__link} ${activeNavbar === 'Вопрос/ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ', 'ask_and_questions')}>{ t("faq") }</a>
              <a className={`${styles.navigation__link} ${activeNavbar === 'Анкета' && styles.active_navbar}`} onClick={() => handleItemClick('Анкета', 'form')}>{ t("form") }</a>
              <a href='/' className={`${styles.navigation__link} ${activeNavbar === 'Галерея' && styles.active_navbar}`}>{ t("gallery") }</a>
              <a className={`${styles.navigation__link} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты', 'footer')}>{ t("contacts") }</a>
            </ul>
          </div>
          <div className={styles.navigation__lng}>
            <div className={`${styles.language_dropdown}`} onClick={toggleLanguageDropdown}>
              { languageDropdown ? t("choose_language") : language}
              {languageDropdown && (
                <ul className={`${styles.language_list} animate__animated animate__fadeIn`}>
                  <li onClick={() => handleLanguageChange('Русский')}>Русский</li>
                  <li onClick={() => handleLanguageChange('English')}>English</li>
                  <li onClick={() => handleLanguageChange('Кыргызча')}>Кыргызча</li>
                </ul>
              )}
            </div>
            { languageDropdown ? (
              null
            ) : (
              <img src={currentLanguage === "Кыргызча" ? KGLng.src : currentLanguage === "Русский" ? Russia.src : English.src} className={styles.lng_svg} alt='language' />
            ) }
          </div>
        </nav>
      </div>
    </header>
  )
}
