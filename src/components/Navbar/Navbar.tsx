'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import KGLng from '../../app/assets/svgs/navbar/Group 173.svg';
import LogoSVG from '../../app/assets/svgs/navbar/Group 649.svg';
import { useRouter } from 'next/navigation';
import burger_menu from '../../app/assets/svgs/navbar/burger_menu.svg'
import BurgerMenu from './BurgerMenu';
import { useTranslation } from 'react-i18next';
import i18n from '@/app/i18n';


export default function Navbar() {
    const { t } = useTranslation();
    const [activeNavbar, setActiveItem] = useState('Главная');
    const [ openBurgerMenu, setOpenBurgerMenu ] = useState(false);
    const [language, setLanguage] = useState('Кыргызча');
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const navigate = useRouter();

    const handleItemClick = (item: string, sectionId: any) => {
        setActiveItem(item);
        smoothScroll(sectionId);
        if(item === 'Анкета') {
            navigate.push('/form')
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
        <header className={styles.navbar}>
            <div className={styles.container}>
                <nav className={styles.navbar__items}>
                    <div className={styles.burder_menu} onClick={() => setOpenBurgerMenu(true)}>
                        <img src={burger_menu.src} alt='burger menu' />
                    </div>
                    { openBurgerMenu ? (
                        <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu}/>
                    ) : (null) }
                    <div className={styles.navbar__item}>
                        <img src={LogoSVG.src} className={styles.logo} alt='logo navbar' />
                    </div>
                    <ul className={styles.navigation}>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Главная' && styles.active_navbar}`} onClick={() => handleItemClick('Главная', 'home')}>{ t("home") }</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'О нас' && styles.active_navbar}`} onClick={() => handleItemClick('О нас', 'about_us')}>{ t("about") }</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Вопрос/ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ', 'faq')}>{ t("faq") }</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Анкета' && styles.active_navbar}`} onClick={() => handleItemClick('Анкета', 'survey')}>{ t("form") }</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Галерея' && styles.active_navbar}`} onClick={() => handleItemClick('Галерея', 'gallery')}>{ t("gallery") }</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты', 'footer')}>{ t("contacts") }</li>
                    </ul>
                    <div className={styles.lng_block}>
                        <div className={styles.language_dropdown} onClick={toggleLanguageDropdown}>
                            { languageDropdown ? t("choose_language") : language}
                            {languageDropdown && (
                                <ul className={styles.language_list}>
                                    <li onClick={() => handleLanguageChange('Русский')}>Русский</li>
                                    <li onClick={() => handleLanguageChange('English')}>English</li>
                                    <li onClick={() => handleLanguageChange('Кыргызча')}>Кыргызча</li>
                                </ul>
                            )}
                        </div>
                        { languageDropdown ? (
                            null
                        ) : (
                            <img src={KGLng.src} className={styles.lng_svg} alt='language' />
                        ) }
                    </div>
                </nav>
            </div>
        </header>
    );
}