'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import KGLng from '../../app/assets/svgs/navbar/Group 173.svg';
import LogoSVG from '../../app/assets/svgs/navbar/Group 649.svg';
import burger_menu from '../../app/assets/svgs/navbar/burger_menu.svg'
import BurgerMenu from './BurgerMenu';
import { useTranslation } from 'react-i18next';
import russianLogo from '../../app/assets/svgs/russian_logo.svg';
import englishLogo from '../../app/assets/svgs/english_logo.svg';
import Russia from '../../app/assets/svgs/russian.svg';
import English from '../../app/assets/svgs/english.svg';


export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [activeNavbar, setActiveItem] = useState('Главная');
    const [ openBurgerMenu, setOpenBurgerMenu ] = useState(false);
    const [ closed, setClosed ] = useState(false);
    const [language, setLanguage] = useState('Кыргызча');
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const currentLanguage = i18n.language

    const handleItemClick = (item: string, sectionId: any) => {
        setActiveItem(item);
        smoothScroll(sectionId);
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
        <header className={`${styles.navbar}`}>
            <div className={styles.container}>
                <nav className={styles.navbar__items}>
                    <div className={styles.burder_menu} onClick={() => setOpenBurgerMenu(true)}>
                        <img src={burger_menu.src} alt='burger menu' />
                    </div>
                    { openBurgerMenu ? (
                        <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} closed={closed} setClosed={setClosed} />
                    ) : (null) }
                    <div className={`${styles.navbar__item} animate__animated animate__fadeInDown`}>
                        <img src={currentLanguage === "Кыргызча" ? LogoSVG.src : currentLanguage === "Русский" ? russianLogo.src : englishLogo.src} className={styles.logo} alt='logo navbar' />
                    </div>
                    <ul className={`${styles.navigation}`}>
                        <li><a href='/' className={`${styles.navigation__item} ${activeNavbar === 'Главная' && styles.active_navbar}`} onClick={() => handleItemClick('Главная', 'home')}>{ t("home") }</a></li>
                        <li><a href='#about' className={`${styles.navigation__item} ${activeNavbar === 'О нас' && styles.active_navbar}`} onClick={() => handleItemClick('О нас', 'about_us')}>{ t("about") }</a></li>
                        <li><a href='#faq' className={`${styles.navigation__item} ${activeNavbar === 'Вопрос/ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ', 'faq')}>{ t("faq") }</a></li>
                        <li><a href='/form' className={`${styles.navigation__item} ${activeNavbar === 'Анкета' && styles.active_navbar}`}>{ t("form") }</a></li>
                        <li><a href='#gallery' className={`${styles.navigation__item} ${activeNavbar === 'Галерея' && styles.active_navbar}`} onClick={() => handleItemClick('Галерея', 'gallery')}>{ t("gallery") }</a></li>
                        <li><a href='#footer' className={`${styles.navigation__item} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты', 'footer')}>{ t("contacts") }</a></li>
                    </ul>
                    <div className={styles.lng_block}>
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
    );
}