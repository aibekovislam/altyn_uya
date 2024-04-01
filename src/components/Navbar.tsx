'use client'

import React, { useState } from 'react';
import styles from '../app/styles/navbar.module.css';
import KGLng from '../app/assets/svgs/navbar/Group 173.svg';
import LogoSVG from '../app/assets/svgs/navbar/Group 649.svg';

export default function Navbar() {
    const [ activeNavbar, setActiveItem ] = useState('Главная');

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    }

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <nav className={styles.navbar__items}>
                    <div className={styles.navbar__item}>
                        <img src={LogoSVG.src} className={styles.logo} alt='logo navbar' />
                    </div>
                    <ul className={styles.navigation}>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Главная' && styles.active_navbar}`} onClick={() => handleItemClick('Главная')}>Главная</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'О нас' && styles.active_navbar}`} onClick={() => handleItemClick('О нас')}>О нас</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Вопрос/ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ')}>Вопрос/ответ</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Анкета' && styles.active_navbar}`} onClick={() => handleItemClick('Анкета')}>Анкета</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Галерея' && styles.active_navbar}`} onClick={() => handleItemClick('Галерея')}>Галерея</li>
                        <li className={`${styles.navigation__item} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты')}>Контакты</li>
                    </ul>
                    <div className={styles.lng_block}>
                        Кыргызча
                        <img src={KGLng.src} className={styles.lng_svg} alt='language' />
                    </div>
                </nav>
            </div>
        </header>
    )
}