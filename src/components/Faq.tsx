'use client'

import React, { useEffect } from 'react';
import styles from '../app/styles/faq.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchFAQ } from '@/app/redux/features/faq/faqSlice';
import click_link from '../app/assets/svgs/click_link.svg';

export default function Faq() {
    const faq = useSelector((state: RootStates) => state.faq.faq);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchFAQ())
    }, [dispatch])

    return (
        <section id='faq' className={styles.faq__block}>
            <h3 className={styles.section_title}>Вопросы ответы</h3>
            <div className={styles.faq_parent}>
                <div className='container'>
                    <div className={styles.faq__img_block}>
                        { faq.map((item: any, index: number) => (
                            <div key={index} className={styles.block_faq}>
                                {item.text_kg} 
                                <img src={click_link.src} alt='click_link' />
                            </div>
                        )) }
                    </div>
                </div>
            </div>
            <span className={styles.email}>www.altynuya@altynuya.org </span>
        </section>
    )
}
