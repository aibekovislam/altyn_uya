'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import KGLng from '../../app/assets/svgs/navbar/Group 173.svg';
import CloseSVG from '../../app/assets/svgs/close-line-icon.svg';
import { useRouter } from 'next/navigation';

export default function BurgerMenu({ openBurgerMenu, setOpenBurgerMenu }: any) {
    const navigate = useRouter();
    const [activeNavbar, setActiveItem] = useState('Главная');

    const handleItemClick = (item: string, sectionId: any) => {
        setActiveItem(item);
        setOpenBurgerMenu(false);
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

    return (
        <div className={`${styles.burger_menu} ${openBurgerMenu === true ? styles.open : ""}`}>
            <div className='container'>
                <ul className={styles.burger_menu__items}>
                    <li className={`${styles.burger_menu__item} ${activeNavbar === 'Главная' && styles.active_navbar}`} onClick={() => handleItemClick('Главная', 'home')}>Главная</li>
                    <li className={`${styles.burger_menu__item} ${activeNavbar === 'О нас' && styles.active_navbar}`} onClick={() => handleItemClick('О нас', 'about_us')}>О нас</li>
                    <li className={`${styles.burger_menu__item} ${activeNavbar === 'Вопрос/Ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ', 'faq')}>Вопрос/Ответ</li>
                    <li className={`${styles.burger_menu__item} ${activeNavbar === 'Анкета' && styles.active_navbar}`} onClick={() => handleItemClick('Анкета', 'survey')}>Анкета</li>
                    <li className={`${styles.burger_menu__item} ${activeNavbar === 'Галерея' && styles.active_navbar}`} onClick={() => handleItemClick('Галерея', 'gallery')}>Галерея</li>
                    <li className={`${styles.burger_menu__item} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты', 'footer')}>Контакты</li>
                </ul>
                <div className={styles.lng}>
                    Кыргызча
                    <img src={KGLng.src} className={styles.lng_svg} alt='language' />
                </div>
            </div>
            <img src={CloseSVG.src} alt='close svg' className={styles.close_burger_menu} onClick={() => {
                setOpenBurgerMenu(false)
            }} />
        </div>
    )
}
