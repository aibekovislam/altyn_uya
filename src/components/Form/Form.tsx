'use client'

import React, { useEffect, useState } from 'react'
import styles from './form.module.css';
import { useDispatch } from 'react-redux';
import { sendForm } from '@/app/redux/features/form/formSlice';
import { useTranslation } from 'react-i18next';

export default function Form() {
    const dispatch = useDispatch<any>();
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
            dispatch(sendForm(formValue));
            console.log('sended')
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <form className={styles.form} onSubmit={handleSendQuestionnaire}>
            <input type='text' onChange={handleChange} value={formValue.name} placeholder={t("input_placeholder1")} name='name' className={styles.form_input} />
            <input type='tel' onChange={handleChange} value={formValue.phone} placeholder={t("input_placeholder2")} name='phone' className={styles.form_input} />
            <input type='text' onChange={handleChange} value={formValue.reaseon} placeholder={t("input_placeholder3")} name='reaseon' className={styles.form_input} />
            <p className={styles.form__text}>{ t("form_text") }</p>
            <button className={styles.form__btn}>{ t("registration") }</button>
        </form>
    )
}
