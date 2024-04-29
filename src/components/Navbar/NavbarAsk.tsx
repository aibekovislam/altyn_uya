'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import KGLng from '../../app/assets/svgs/navbar/Group 173.svg';
import { NavbarProps } from './Navbar.props';
import { useRouter } from 'next/navigation';

export default function NavbarAsk({ selectedSection = 'Вопрос/ответ' }: NavbarProps) {
  const [activeNavbar, setActiveItem] = useState(selectedSection);
  const navigate = useRouter();

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

  return (
    <header className={styles.ask_block_navbar}>
      <div className='container'>
        <nav className={styles.navigation_ask}>
          <div className={styles.links_wrapper}>
            <ul className={styles.navigation__links}>
              <li className={`${styles.navigation__link} ${activeNavbar === 'О нас' && styles.active_navbar}`} onClick={() => handleItemClick('О нас', 'about_us')}>О нас</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Вопрос/ответ' && styles.active_navbar}`} onClick={() => handleItemClick('Вопрос/ответ', 'ask_and_questions')}>Вопрос/ответ</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Анкета' && styles.active_navbar}`} onClick={() => handleItemClick('Анкета', 'form')}>Анкета</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Галерея' && styles.active_navbar}`} onClick={() => handleItemClick('Галерея', 'gallery')}>Галерея</li>
              <li className={`${styles.navigation__link} ${activeNavbar === 'Контакты' && styles.active_navbar}`} onClick={() => handleItemClick('Контакты', 'footer')}>Контакты</li>
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
