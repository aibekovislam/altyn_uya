// 'use client'

// import React, { useEffect, useState } from 'react'
// import styles from './form.module.css';
// import { useDispatch } from 'react-redux';
// import { sendForm } from '@/app/redux/features/form/formSlice';
// import { useTranslation } from 'react-i18next';
// import { frame } from '@/app/helpers/lngEffect';

// export default function Form({ sendedForm, setSendedForm }: any) {
//     const dispatch = useDispatch<any>();
//     const [ errorForm, setErrorForm ] = useState(false);
//     const [ formValue, setFormValue ] = useState({
//         name: '',
//         phone: '',
//         reaseon: ''
//     })

//     const handleChange = (e: any) => {
//         const { name, value } = e.target;
//         setFormValue((prevData) => ({
//             ...prevData,
//             [ name ]: value
//         }))
//     }

//     const { t, i18n } = useTranslation();
//     const currentLanguage = i18n.language;

//     const handleSendQuestionnaire = (e: React.FormEvent<HTMLFormElement>) => {
//         try {
//             e.preventDefault();
//             if (!formValue.name || !formValue.phone || !formValue.reaseon) {
//                 setErrorForm(true);
//                 return;
//             }
//             frame();
//             setSendedForm(true);
//             dispatch(sendForm(formValue));
//             console.log('sended')
//         } catch (error) {
//             console.log(error);
//         }
//     }
    
//     return (
//         sendedForm ? (
//             <h2 className={styles.sended}>{ t("sended_title") }</h2>
//         ) : (
//             <form className={styles.form} onSubmit={handleSendQuestionnaire}>
//                 <input type='text' onChange={handleChange} value={formValue.name} placeholder={t("input_placeholder1")} name='name' className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`} />
//                 <input type='tel' onChange={handleChange} value={formValue.phone} placeholder={t("input_placeholder2")} name='phone' className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`} />
//                 <input type='text' onChange={handleChange} value={formValue.reaseon} placeholder={t("input_placeholder3")} name='reaseon' className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`} />
//                 { errorForm ? (
//                     <div className={`${styles.error_block} animate__animated animate__rubberBand`}>Заполните все данные!</div>
//                 ) : (null) }
//                 <p className={styles.form__text}>{ t("form_text") }</p>
//                 <button className={styles.form__btn}>{ t("registration") }</button>
//             </form>
//         )
//     )
// }


'use client'
import { API_URL } from "@/utils/consts";
import axios from "axios";
import { useState } from "react";
import styles from './form.module.css';
import { useTranslation } from "react-i18next";

const Form = () => {
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [paypalUrl, setPaypalUrl] = useState('');
    const [paypalForm, setPaypalForm] = useState('');
    const [ errorForm, setErrorForm ] = useState(false);
    const { t } = useTranslation();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!amount || !email) {
                setErrorForm(true);
                return;
            }
            const response = await axios.post(`${API_URL}/api/payment/`, {
                amount,
                email,
            });
            setPaypalUrl(response.data.paypal_url);
            setPaypalForm(response.data.paypal_form);
        } catch (error) {
            console.error("There was an error processing the payment!", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`}
                        placeholder={t("sum")}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`}
                        placeholder="Email"
                    />
                <button type="submit" className={styles.form__btn}>{ t("pay") }</button>
            </form>
            {paypalUrl && (
                <div>
                    <h2>Pay with PayPal</h2>
                    <div dangerouslySetInnerHTML={{ __html: paypalForm }} />
                </div>
            )}
        </div>
    );
};

export default Form;
