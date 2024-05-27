'use client'

import React, { useEffect, useState } from 'react';
import styles from './questions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStates } from '@/app/redux/store';
import { fetchQuestions } from '@/app/redux/features/questions/questionSlice';
import three_dots from '../../app/assets/svgs/three_dots.svg';
import ellipse from '../../app/assets/svgs/Ellipse.svg';
import ellipseTwo from '../../app/assets/svgs/Eclipse_two.svg';
import arrowDown from '../../app/assets/svgs/arrow_down.svg';
import GoatIMG from '../../app/assets/ask_and_questions/goat.png';
import CowIMG from '../../app/assets/ask_and_questions/cow.png';
import google from '../../app/assets/svgs/social_media/google_plus.svg';
import facebook from '../../app/assets/svgs/social_media/facebook_blue.svg';
import instagram from '../../app/assets/svgs/social_media/instagram_blue.svg';
import whatsapp from '../../app/assets/svgs/social_media/whatsapp_blue.svg';
import charity_proccess from '../../app/assets/ask_and_questions/charity_process.png';
import charity_report from '../../app/assets/ask_and_questions/charity_report.png'
import courier from '../../app/assets/ask_and_questions/courier.png';
import { fetchAnswers } from '@/app/redux/features/answers/answerSlice';
import { AnswerType } from '@/utils/interfacesAndTypes';
import { API_URL } from '@/utils/consts';
import { getMainThemeByLanguage, getTextByLanguage } from '@/app/helpers/lngEffect';
import { useTranslation } from 'react-i18next';
import QuestionsMobile from './QuestionsMobile';
import Loading from '@/app/Loading';

export default function Questions() {
    const questions = useSelector((state: RootStates) => state.questions.questions);
    const answers = useSelector((state: RootStates) => state.answers.answers);
    const dispatch = useDispatch<any>();
    const [isMobile, setIsMobile] = useState(() => {
        if(typeof window !== 'undefined') {
            return window.innerWidth < 520
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 520);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = answers.map((item: AnswerType) => {
        try {
            if (item.answers) {
                return JSON.parse(item.answers);
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return null;
        }
    });        

    useEffect(() => {
        dispatch(fetchQuestions());
        dispatch(fetchAnswers());
    }, [dispatch]);

    const answersWithImages = answers.map((answer: AnswerType, index: number) => ({
        ...answer,
        image: index === 0 ? GoatIMG.src : index === 1 ? CowIMG.src : null,
        answer_image: index === 3 ? charity_proccess.src : index === 4 ? charity_report.src : index === 5 ? courier.src : ""
    }));   

    const { t, i18n } = useTranslation();    
    const currentLanguage = i18n.language;

    return (
        answersWithImages.length !== 0 ? (
            <div className={styles.questions}>
                <QuestionsMobile answersWithImages={answersWithImages} questions={questions} data={data} />
                { answersWithImages.map((answer: AnswerType, main_index: number) => (
                    main_index <= 2 ? (
                        <div key={main_index} id={`question_${main_index}`} className={`${styles.questions_and_answers} container`}>
                            <div className={styles.questions__item}>
                                <h2 className={styles.question__title}>{ questions[answer.question]?.text_kg ? getTextByLanguage(questions[answer.question], currentLanguage) : "" }</h2>
                            </div>
                            <div className={styles.questions__item}>
                                <div className={styles.question__typography}>
                                    <p className={styles.question__description} style={ main_index === 2 ? { maxWidth: "500px", marginTop: "30px" } : {} }>
                                        { getMainThemeByLanguage(answer, currentLanguage) }
                                    </p>
                                </div>
                            </div>
                            <div className={styles.questions__item_asnwers} style={ main_index === 1 ? { marginTop: "100px" } : main_index === 2 ? { } : {} }>
                                <div className={styles.answers__for__questions}>
                                    <div className={styles.answers__item}>
                                        <div className={styles.three_dots__block} style={ main_index === 2 ? { display: "none" } : {} } >
                                            <img src={three_dots.src} alt='dots' className={styles.three_dots} />
                                        </div>
                                        {Object.entries(data[main_index]).slice(0, 6).map(([key, value], index) => (
                                            <div key={index} className={styles.answer__block}>
                                                <img src={`${main_index === 0 ? ellipse.src : main_index === 1 ? ellipseTwo.src : null}`} style={main_index === 2 ? { display: "none" } : {}} className={styles.ellipse} alt='ellipse' />
                                                <p className={styles.answer__text}>
                                                    { main_index === 2 ? (
                                                        <span className={styles.key_answer}>{ key }</span>
                                                    ) : null }
                                                    {typeof value === 'string' ? value : JSON.stringify(value)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.answers__item}>
                                        <div className={styles.three_dots__block} style={ main_index === 2 ? { display: "none" } : {} }>
                                            <img src={three_dots.src} className={styles.three_dots} alt='dots' />
                                        </div>
                                        {Object.entries(data[main_index]).slice(6, 11).map(([key, value], index) => (
                                            <div key={index} className={styles.answer__block}>
                                                <img src={`${main_index === 0 ? ellipse.src : main_index === 1 ? ellipseTwo.src : null}`} style={main_index === 2 ? { display: "none" } : {}} className={styles.ellipse} alt='ellipse' />
                                                <p className={styles.answer__text}>
                                                    { main_index === 2 ? (
                                                        <span className={styles.key_answer}>{ key }</span>
                                                    ) : null }
                                                    {typeof value === 'string' ? value : JSON.stringify(value)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.answers__item}>
                                        <div className={styles.three_dots__block} style={ main_index === 2 ? { display: "none" } : {} }>
                                            <img src={three_dots.src} className={styles.three_dots} alt='dots' />
                                        </div>
                                        {Object.entries(data[main_index]).slice(11).map(([key, value], index) => (
                                            <div key={index} className={styles.answer__block}>
                                                <img src={`${main_index === 0 ? ellipse.src : main_index === 1 ? ellipseTwo.src : null}`} style={main_index === 2 ? { display: "none" } : {}} className={styles.ellipse} alt='ellipse' />
                                                <p className={styles.answer__text}>
                                                    { main_index === 2 ? (
                                                        <span className={styles.key_answer}>{ key }</span>
                                                    ) : null }
                                                    {typeof value === 'string' ? value : JSON.stringify(value)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.arrow_down__block} style={ main_index >= 2 ? { display: "none" } : {} }>
                                <img src={arrowDown.src} className={styles.arrow_down} alt='arrow down svg' />
                            </div>
                            <div className={`${main_index === 0 ? styles.img_absolute : main_index === 1 ? styles.img_absolute_cow : ""}`}>
                                <img src={answer.image ? answer.image : ""} alt='Ответы Алтын уя' />
                            </div>
                            { main_index === 2 ? (
                                <div className={styles.social_media_block}>
                                    <div className={styles.social_media}>
                                    <img src={google.src} alt='google_plus' />
                                    <img src={facebook.src} alt='facebook' />
                                    <img src={instagram.src} alt='instagram' />
                                    <img src={whatsapp.src} alt='whatsapp' />
                                    </div>
                                    <div className={styles.email}>www.altynuya@altynuya.org</div>
                                </div>
                            ) : null }
                        </div>
                    ) : (
                        <div className={`${main_index % 2 !== 0 ? styles.questions__with_img : styles.questions_with_img_dec}`}>
                            <div className={`${styles.questions__with_img__item}`}>
                                <div className={`${styles.questions_typography} container`}>
                                    <h2>{ questions[answer.question]?.text_kg ? questions[answer.question]?.text_kg : "" }</h2>
                                    <ul className={styles.answers_with_numbers}>
                                        { Object.entries(data[main_index]).map(([key, value], index) => (
                                            <li key={index} className={styles.numbers}>{ typeof value === 'string' ? value : null }</li>
                                        )) }
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.questions__with_img__item}>
                                <div className={styles.img_with_answer}>
                                    <img src={`${answers[main_index].image}`} alt='answer image' />
                                </div>
                            </div>
                        </div>
                    )
                )) }
            </div>
        ) : (
            <div style={{ width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Loading/>
            </div>
        )
    )
}