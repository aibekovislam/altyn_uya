'use client'

import React, { useEffect } from 'react';
import styles from './questions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchQuestions } from '@/app/redux/features/questions/questionSlice';
import three_dots from '../../app/assets/svgs/three_dots.svg';

export default function Questions() {
    const questions = useSelector((state: RootStates) => state.questions.questions)
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])

    return (
        <div className={styles.questions}>
            { questions.map((question: any) => (
                <>
                    <div className={styles.questions__item}>
                        <h2 className={styles.question__title}>{ question.text_kg }</h2>
                    </div>
                    <div className={styles.questions__item}>
                        <div className={styles.question__typography}>
                            <p className={styles.question__description}>
                                “Алтын Уя” Коомдук Фондунун Qurban.org сайты аркылуу бир күндүн ичинде курмандык чалдыра аласыз.
                            </p>
                        </div>
                    </div>
                    <div className={styles.questions__item}>
                        <div className={styles.answers__for__questions}>
                            <div className={styles.answers__item}></div>
                            <div className={styles.answers__item}></div>
                            <div className={styles.answers__item}></div>
                        </div>
                    </div>
                </>
            )) }
        </div>
    )
}
