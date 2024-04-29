'use client'

import React, { useEffect } from 'react';
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

export default function Questions() {
    const questions = useSelector((state: RootStates) => state.questions.questions);
    const answers = useSelector((state: RootStates) => state.answers.answers);
    const dispatch = useDispatch<any>();
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

    console.log(data)

    useEffect(() => {
        dispatch(fetchQuestions());
        dispatch(fetchAnswers());
    }, [dispatch]);

    const answersWithImages = answers.map((answer: AnswerType, index: number) => ({
        ...answer,
        image: index === 0 ? GoatIMG.src : index === 1 ? CowIMG.src : null,
        answer_image: index === 3 ? charity_proccess.src : index === 4 ? charity_report.src : index === 5 ? courier.src : ""
    }));   

    return (
        <div className={styles.questions}>
            { answersWithImages.map((answer: AnswerType, main_index: number) => (
                main_index <= 2 ? (
                    <div key={main_index} id={`question_${main_index}`} className={`${styles.questions_and_answers} container`}>
                        <div className={styles.questions__item}>
                            <h2 className={styles.question__title}>{ questions[answer.question]?.text_kg ? questions[answer.question]?.text_kg : "" }</h2>
                        </div>
                        <div className={styles.questions__item}>
                            <div className={styles.question__typography}>
                                <p className={styles.question__description} style={ main_index === 2 ? { maxWidth: "500px", marginTop: "30px" } : {} }>
                                    { answer.theme_kg }
                                </p>
                            </div>
                        </div>
                        <div className={styles.questions__item_asnwers} style={ main_index === 1 ? { marginTop: "100px" } : main_index === 2 ? { marginTop: "150px" } : {} }>
                            <div className={styles.answers__for__questions}>
                                <div className={styles.answers__item}>
                                    <div className={styles.three_dots__block} style={ main_index === 2 ? { display: "none" } : {} } >
                                        <img src={three_dots.src} className={styles.three_dots} />
                                    </div>
                                    {Object.entries(data[main_index]).slice(0, 6).map(([key, value], index) => (
                                        <div key={index} className={styles.answer__block}>
                                            <img src={`${main_index === 0 ? ellipse.src : main_index === 1 ? ellipseTwo.src : null}`} style={main_index === 2 ? { display: "none" } : {}} className={styles.ellipse} />
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
                                        <img src={three_dots.src} className={styles.three_dots} />
                                    </div>
                                    {Object.entries(data[main_index]).slice(6, 11).map(([key, value], index) => (
                                        <div key={index} className={styles.answer__block}>
                                            <img src={`${main_index === 0 ? ellipse.src : main_index === 1 ? ellipseTwo.src : null}`} style={main_index === 2 ? { display: "none" } : {}} className={styles.ellipse} />
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
                                        <img src={three_dots.src} className={styles.three_dots} />
                                    </div>
                                    {Object.entries(data[main_index]).slice(11).map(([key, value], index) => (
                                        <div key={index} className={styles.answer__block}>
                                            <img src={`${main_index === 0 ? ellipse.src : main_index === 1 ? ellipseTwo.src : null}`} style={main_index === 2 ? { display: "none" } : {}} className={styles.ellipse} />
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
                            <img src={arrowDown.src} className={styles.arrow_down} />
                        </div>
                        <div className={`${main_index === 0 ? styles.img_absolute : main_index === 1 ? styles.img_absolute_cow : ""}`}>
                            <img src={answer.image ? answer.image : ""} />
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
                                        <li className={styles.numbers}>{ typeof value === 'string' ? value : null }</li>
                                    )) }
                                </ul>
                            </div>
                        </div>
                        <div className={styles.questions__with_img__item}>
                            <div className={styles.img_with_answer}>
                                <img src={`${API_URL}/${answers[main_index].image.slice(16)}`} alt='answer image' />
                            </div>
                        </div>
                    </div>
                )
            )) }
        </div>
    )
}






// { questionsWithImages.map((question: any, index: number) => (
//     index <= 2 ? (
//         <div key={index} id={`question_${index}`} className={`${styles.questions_and_answers} container`}>
//             <div className={styles.questions__item}>
//                 <h2 className={styles.question__title}>{ question.text_kg }</h2>
//             </div>
//             <div className={styles.questions__item}>
//                 <div className={styles.question__typography}>
//                     <p className={styles.question__description} style={ index === 2 ? { maxWidth: "500px", marginTop: "30px" } : {} }>
//                         { question.text }
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.questions__item_asnwers} style={ index === 1 ? { marginTop: "100px" } : index === 2 ? { marginTop: "150px" } : {} }>
//                 <div className={styles.answers__for__questions}>
//                     <div className={styles.answers__item}>
//                         <div className={styles.three_dots__block} style={ index === 2 ? { display: "none" } : {} } >
//                             <img src={three_dots.src} className={styles.three_dots} />
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Ар кандай жаман-жакшылыктар үчүн курмандык чалдыра аласыз (үйлүү, уналуу, балалуу болуу, кан чыгаруу, маркумдарга куран окутуу ж.б.у.с.);</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Бизде курмандыкка союга ылайыктуу мал-жандыктар даяр;</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Андыктан мал издеп убара болбойсуз жана убактыңыз үнөмдөлөт;</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Малдын акчасын мобилдик банкинг, акча которуу системалары аркылуу тез жана оңой түрдө которо аласыз (Мбанк, Оптима, демир банк, KICB банк);</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Чет өлкөдөн да бизге өз аманатыңызды тапшыра аласыз;</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Бизде курмандыкты шариат боюнча, өз адептери менен соё турчу касапчылар бар;</p>
//                         </div>
//                     </div>
//                     <div className={styles.answers__item}>
//                         <div className={styles.three_dots__block} style={ index === 2 ? { display: "none" } : {} }>
//                             <img src={three_dots.src} className={styles.three_dots} />
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Бизде малды союга ылайыктуу таза жай бар;</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Курмандык чалуу шариат боюнча аткарылат (ниет кылуу, бата берүү, куран окуу баары камтылат);</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Өз атыңыздан курмандык чалдыруу үчүн, өкүлдүгүңүздү телефон аркылуу берип, өз аманатыңызды кызматкерлердин бирине тапшырсаңыз болот; </p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Курмандыгыңыз чындап муктаж болгон үй-бүлөлөргө жана этке чындап зарыл болгон, 7 область боюнча илим алган балдарга таратылат</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Расмий жана ишенимдүү түрдө кызматташкан, 7 область боюнча мекемелер бар. Андыктан, кааласаңыз, өз областыңызда жайгашкан мекемеге курмандык этин жолдой аласыз; </p>
//                         </div>
//                     </div>
//                     <div className={styles.answers__item}>
//                         <div className={styles.three_dots__block} style={ index === 2 ? { display: "none" } : {} }>
//                             <img src={three_dots.src} className={styles.three_dots} />
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Курмандык союлгандан кийин, сизге фото/видео аркылуу так отчёт берилет;</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Сиздин каалоңуз боюнча, курмандык этинин 1 бөлүгүн сиздин үйүңүзгө жеткирип беребиз;</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Курман Айт күндөрү бизге келип, жеринен малды тандап, сатып алып, сойдуруп, курмандык этинин бир бөлүгүн ала кетсеңиз болот;</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Курман Айт күндөрү келген ар бир мейманга өзгөчө көңүл бурулат, сый тамак тартылат жана балдарыңыз үчүн белектер берилет.</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>Бизге адамдар жекеме-жеке кайрылышат. Ошондой эле, компаниялар, коллективдер жана дос, туугандардан турган жамааттар да кайрылып, бодо мал сойдуруп, “орток курмандык” чалдырышат (7 адам);</p>
//                         </div>
//                         <div className={styles.answer__block}>
//                             <img src={`${index === 0 ? ellipse.src : index === 1 ? ellipseTwo.src : null}`} style={ index === 2 ? { display: "none" } : {} } className={styles.ellipse} />
//                             <p className={styles.answer__text}>урман Айт күндөрү гана эмес, каалаган учурда, жылдын каалаган айы, күнү, 7/24 курмандык чалдыра аласыз!</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.arrow_down__block} style={ index >= 2 ? { display: "none" } : {} }>
//                 <img src={arrowDown.src} className={styles.arrow_down} />
//             </div>
//             <div className={`${index === 0 ? styles.img_absolute : index === 1 ? styles.img_absolute_cow : ""}`}>
//             <img src={question.image} />
//         </div>
//         { index === 2 ? (
//             <div className={styles.social_media_block}>
//                 <div className={styles.social_media}>
//                 <img src={google.src} alt='google_plus' />
//                 <img src={facebook.src} alt='facebook' />
//                 <img src={instagram.src} alt='instagram' />
//                 <img src={whatsapp.src} alt='whatsapp' />
//                 </div>
//                 <div className={styles.email}>www.altynuya@altynuya.org</div>
//             </div>
//         ) : null }
//         </div>
//     ) : (
//         <div className={`${index % 2 !== 0 ? styles.questions__with_img : styles.questions_with_img_dec}`}>
//             <div className={`${styles.questions__with_img__item}`}>
//                 <div className={`${styles.questions_typography} container`}>
//                     <h2>{ question.text_kg }</h2>
//                     <ul className={styles.answers_with_numbers}>
//                         <li className={styles.numbers}>Алгач, биздин кызматкерлер шариат боюнча, “курмандыкка чалууга ылайыктуу” малды сатып алышат жана анын баасын сиз менен макулдашат.</li>
//                         <li className={styles.numbers}>Малдын акчасын фонддун сайтта көрсөтүлгөн реквизиттеринин бирине которуп, бизге чек, квитанция жөнөтөсүз.</li>
//                         <li className={styles.numbers}>Ал чек, квитанция дароо фонддун базасына катталат.</li>
//                         <li className={styles.numbers}>Курмандык атайын таза жерде союлат.</li>
//                         <li className={styles.numbers}>Касапчылар малды курмандыктын бардык адептерин сактоо менен союшат. Ошондо гана союлган курмандык сахих (туура) болот!</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className={styles.questions__with_img__item}>
//                 <div className={styles.img_with_answer}>
//                     <img src={question.answer_image} alt='answer image' />
//                 </div>
//             </div>
//         </div>
//     )
// )) }