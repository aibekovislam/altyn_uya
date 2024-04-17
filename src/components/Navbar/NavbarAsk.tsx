'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import KGLng from '../../app/assets/svgs/navbar/Group 173.svg';
import { NavbarProps } from './Navbar.props';

export default function NavbarAsk({ selectedSection = 'Вопрос/ответ' }: NavbarProps) {
  const [activeNavbar, setActiveItem] = useState(selectedSection);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    selectedSection = activeNavbar;
  };

  return (
    <header className={styles.ask_block_navbar}>
      <div className='container'>
        <nav className={styles.navigation_ask}>
          <div className={styles.links_wrapper}>
            <ul className={styles.navigation__links}>
              <li className={`${styles.navigation__link} ${activeNavbar === 'О нас' && styles.active_navbar}`} onClick={() => handleItemClick('О нас')}>О нас</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Вопрос/ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ')}>Вопрос/ответ</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Анкета' && styles.active_navbar}`} onClick={() => handleItemClick('Анкета')}>Анкета</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Галерея' && styles.active_navbar}`} onClick={() => handleItemClick('Галерея')}>Галерея</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты')}>Контакты</li>
            </ul>
          </div>
          <div className={styles.navigation__lng}>
            Кыргызча
            <img src={KGLng.src} alt='language' />
          </div>
        </nav>
      </div>
    </header>
  )
}
