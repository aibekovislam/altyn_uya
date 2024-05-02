'use client'

import React, { useEffect, useState } from 'react'
import styles from './form.module.css';
import { useDispatch } from 'react-redux';
import { sendForm } from '@/app/redux/features/form/formSlice';
import { useTranslation } from 'react-i18next';
import confetti from 'canvas-confetti'
import { frame } from '@/app/helpers/lngEffect';

export default function Form({ sendedForm, setSendedForm }: any) {
    const dispatch = useDispatch<any>();
    const [ errorForm, setErrorForm ] = useState(false);
    const [ formValue, setFormValue ] = useState({
        name: '',
        phone: '',
        reaseon: ''
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValue((prevData) => ({
            ...prevData,
            [ name ]: value
        }))
    }

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const handleSendQuestionnaire = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (!formValue.name || !formValue.phone || !formValue.reaseon) {
                setErrorForm(true);
                return;
            }
            frame();
            setSendedForm(true);
            dispatch(sendForm(formValue));
            console.log('sended')
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        sendedForm ? (
            <h2 className={styles.sended}>{ t("sended_title") }</h2>
        ) : (
            <form className={styles.form} onSubmit={handleSendQuestionnaire}>
                <input type='text' onChange={handleChange} value={formValue.name} placeholder={t("input_placeholder1")} name='name' className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`} />
                <input type='tel' onChange={handleChange} value={formValue.phone} placeholder={t("input_placeholder2")} name='phone' className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`} />
                <input type='text' onChange={handleChange} value={formValue.reaseon} placeholder={t("input_placeholder3")} name='reaseon' className={`${styles.form_input} ${ errorForm ? styles.errorInput : "" }`} />
                { errorForm ? (
                    <div className={`${styles.error_block} animate__animated animate__rubberBand`}>Заполните все данные!</div>
                ) : (null) }
                <p className={styles.form__text}>{ t("form_text") }</p>
                <button className={styles.form__btn}>{ t("registration") }</button>
            </form>
        )
    )
}
