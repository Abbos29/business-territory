import React, { useState } from 'react';
import s from './Button.module.scss';
import { sendToTelegram } from '../../../utils/telegram';

const Button = ({ children, align }) => {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [success, setSuccess] = useState(false);
    const [isActive, setIsActive] = useState(false); // состояние для открытия модалки

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = `Имя: ${formData.name}\nТелефон: ${formData.phone}`;
        const sent = await sendToTelegram(message);

        if (sent) {
            setSuccess(true);
            setFormData({ name: '', phone: '' });
        }
    };

    const openModal = () => {
        setIsActive(true);
    };

    const closeModal = (e) => {
        // Закрыть модалку при клике вне области .box
        if (e.target === e.currentTarget) {
            setIsActive(false);
        }
    };

    return (
        <>
            <button className={s.btn} onClick={openModal} style={{ alignSelf: align }}>
                {children}
            </button>

            {/* Модалка с условным рендерингом класса active */}
            <div
                className={`${s.modal} ${isActive ? s.active : ''}`}
                onClick={closeModal}
            >
                <div className={s.box}>
                    <h2>Оставьте заявку на бесплатную консультацию</h2>
                    {!success ? (
                        <form onSubmit={handleSubmit} className={s.form}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Ваш номер телефона"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <button type="submit">ОТПРАВИТЬ</button>
                        </form>
                    ) : (
                        <button className={s.thankYouButton}>Спасибо за вашу заявку!</button>
                    )}
                    <small>Отправляя свои данные, Вы соглашаетесь на обработку персональных данных.</small>
                </div>
            </div>
        </>
    );
};

export default Button;
