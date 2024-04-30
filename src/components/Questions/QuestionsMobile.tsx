'use client'

import React, { useEffect, useState } from 'react'
// import GoatIMG from '../../app/assets/ask_and_questions/goat.png';
// import CowIMG from '../../app/assets/ask_and_questions/cow.png';
// import charity_proccess from '../../app/assets/ask_and_questions/charity_process.png';
// import charity_report from '../../app/assets/ask_and_questions/charity_report.png'
// import courier from '../../app/assets/ask_and_questions/courier.png';
import { useTranslation } from 'react-i18next';
import arrow_next from '../../app/assets/svgs/slider/arrow_next.svg';
import arrow_prev from '../../app/assets/svgs/slider/arrow_prev.svg';
import styles from './questions.module.css';
import dots from '../../app/assets/svgs/dots.svg';
import active_dots from '../../app/assets/svgs/active_dots.svg';
import Slider from 'react-slick';
import { getMainThemeByLanguage, getTextByLanguage } from '@/app/helpers/lngEffect';
import ellipse from '../../app/assets/svgs/Ellipse.svg';
import ellipseTwo from '../../app/assets/svgs/Eclipse_two.svg';

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_next.src} className={`${className} ${styles.next}`} style={{ ...style, width: "40px", height: "40px", top: "100%" }} onClick={onClick} />
    );
  }
  
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img src={arrow_prev.src} className={`${className} ${styles.prev}`} style={{ ...style, width: "40px", height: "40px", top: "100%"}} onClick={onClick} />
    );
}  

export default function QuestionsMobile({ answersWithImages, questions, data }: any) {
    const { t, i18n } = useTranslation();
    
    const currentLanguage = i18n.language;

    console.log(questions, answersWithImages)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    console.log(data)

    return (
        <div className={`${styles.question_mobile} container`}>
            { answersWithImages.map((item: any, main_index: number) => (
                <div key={main_index}>
                    <div className={styles.questions__item} style={{ marginBottom: "15px", marginTop: "30px" }}>
                        <h2 className={styles.question__title}>{ questions[item.question]?.text_kg ? getTextByLanguage(questions[item.question], currentLanguage) : "" }</h2>
                    </div>
                    {/* <Slider { ...settings }> */}
                        { Object.entries(data[main_index]).slice(0, 6).map(([ key, value ], index: number) => (
                            <div key={index} onClick={() => {
                                console.log(data)
                            }} style={{ marginTop: "15px" }} className={styles.answer__block}>
                                { main_index > 2 ? (
                                    <div>{ index + 1 }. </div>
                                ) : (
                                    <img src={`${main_index === 0 ? ellipse.src : main_index === 1 ? ellipseTwo.src : null}`} style={main_index === 2 ? { display: "none" } : {}} className={styles.ellipse} />
                                ) }
                                <p className={styles.answer__text}>
                                    { main_index === 2 ? (
                                        <span className={styles.key_answer}>{ key }</span>
                                    ) : null }
                                    {typeof value === 'string' ? value : JSON.stringify(value)}
                                </p>
                            </div>
                        )) }
                    {/* </Slider> */}
                </div>
            )) }
            {/* <Slider 
                    {...settings} 
                    afterChange={(index) => setActiveSlide(index)}
                >
                    { data?.map((item: any, index: number) => (
                        <div key={index}>{ item }</div>
                    )) }
            </Slider> */}
        </div>
    )
}
