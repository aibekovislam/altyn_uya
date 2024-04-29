'use client'

import React, { useEffect, useState } from 'react'
import styles from './form.module.css';
import { useDispatch } from 'react-redux';
import { sendForm } from '@/app/redux/features/form/formSlice';

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
            <input type='text' onChange={handleChange} value={formValue.name} placeholder='Аты-жөнүңүз:' name='name' className={styles.form_input} />
            <input type='tel' onChange={handleChange} value={formValue.phone} placeholder='Телефон номериңиз' name='phone' className={styles.form_input} />
            <input type='text' onChange={handleChange} value={formValue.reaseon} placeholder='Курмандык чалдыруунун ниети' name='reaseon' className={styles.form_input} />
            <p className={styles.form__text}>Чтобы зарегистрироваться на нашем сайте, вам необходимо заполнить поля.</p>
            <button className={styles.form__btn}>Регистрация</button>
        </form>
    )
}
