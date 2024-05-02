'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import KGLng from '../../app/assets/svgs/navbar/Group 173.svg';
import CloseSVG from '../../app/assets/svgs/close-line-icon.svg';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Russia from '../../app/assets/svgs/russian.svg';
import English from '../../app/assets/svgs/english.svg';

export default function BurgerMenu({ openBurgerMenu, setOpenBurgerMenu }: any) {
    const navigate = useRouter();
    const [activeNavbar, setActiveItem] = useState('Главная');
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('Кыргызча');
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const currentLanguage = i18n.language;

    const toggleLanguageDropdown = () => {
        setLanguageDropdown(!languageDropdown);
    };
    
    const handleLanguageChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
        setLanguageDropdown(false);
    
        i18n.changeLanguage(selectedLanguage);
    };    

    const handleItemClick = (item: string, sectionId: any) => {
        setActiveItem(item);
        setOpenBurgerMenu(false);
        if(item === 'Анкета') {
            navigate.push('/form')
        } else {
            navigate.push('/');
            smoothScroll(sectionId);
        }
    };

    const smoothScroll = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.burger_menu} ${openBurgerMenu ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}`}>
            <div className='container'>
                <ul className={styles.burger_menu__items}>
                    <a href='/' className={`${styles.burger_menu__item} ${activeNavbar === 'Главная' && styles.active_navbar}`}>{ t("home") }</a>
                    <a href='/' className={`${styles.burger_menu__item} ${activeNavbar === 'О нас' && styles.active_navbar}`} onClick={() => handleItemClick('О нас', 'about_us')}>{ t("about") }</a>
                    <a href='/app/ask-and-question' className={`${styles.burger_menu__item} ${activeNavbar === 'Вопрос/Ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ', 'faq')}>{ t("faq") }</a>
                    <a className={`${styles.burger_menu__item} ${activeNavbar === 'Анкета' && styles.active_navbar}`} onClick={() => handleItemClick('Анкета', 'survey')}>{ t("form") }</a>
                    <a href='/' className={`${styles.burger_menu__item} ${activeNavbar === 'Галерея' && styles.active_navbar}`} onClick={() => handleItemClick('Галерея', 'gallery')}>{ t("gallery") }</a>
                    <a href='/' className={`${styles.burger_menu__item} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты', 'footer')}>{ t("contacts") }</a>
                </ul>
                <div className={styles.lng} style={{ justifyContent: "center" }}>
                    <div className={styles.language_dropdown} onClick={toggleLanguageDropdown} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        { languageDropdown ? t("choose_language") : i18n.language}
                        {languageDropdown && (
                            <ul className={`${styles.language_list} animate__animated animate__fadeInDown`}>
                                <li onClick={() => handleLanguageChange('Русский')} style={{ textAlign: "center" }}>Русский</li>
                                <li onClick={() => handleLanguageChange('English')} style={{ textAlign: "center" }}>English</li>
                                <li onClick={() => handleLanguageChange('Кыргызча')} style={{ textAlign: "center" }}>Кыргызча</li>
                            </ul>
                        )}
                    </div>
                        { languageDropdown ? (
                            null
                        ) : (
                            <img src={currentLanguage === "Кыргызча" ? KGLng.src : currentLanguage === "Русский" ? Russia.src : English.src} className={styles.lng_svg} alt='language' />
                        ) }
                </div>
            </div>
            <img src={CloseSVG.src} alt='close svg' className={styles.close_burger_menu} onClick={() => {
                setOpenBurgerMenu(false)
            }} />
        </div>
    )
}
