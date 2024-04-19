import React from 'react'
import styles from './form.module.css';

export default function Form() {
    return (
        <form className={styles.form}>
            <input type='text' placeholder='Аты-жөнүңүз:' name='name' className={styles.form_input} />
            <input type='tel' placeholder='Телефон номериңиз' name='phone' className={styles.form_input} />
            <input type='text' placeholder='Курмандык чалдыруунун ниети' name='' className={styles.form_input} />
            <p className={styles.form__text}>Чтобы зарегистрироваться на нашем сайте, вам необходимо заполнить поля.</p>
            <button className={styles.form__btn}>Регистрация</button>
        </form>
    )
}
