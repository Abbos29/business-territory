import React, { useState } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import YandexMap from '../../ui/YandexMap/YandexMap';
import s from './ContactsWrap.module.scss';
import { sendToTelegram } from '../../../utils/telegram';

const ContactsWrap = () => {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [success, setSuccess] = useState(false);

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

    return (
        <section className={s.contactswrap}>
            <div className="container">
                <SectionTitle title="Контакты" />
                <div className={s.wrap}>
                    <h3>
                        Готовы начать? <br /> Оставьте заявку
                    </h3>
                    <div className={s.box}>
                        <h3>Готовы начать? Оставьте заявку</h3>
                        {!success ? (
                            <form onSubmit={handleSubmit}>
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
                                <button type="submit">Получить консультацию</button>
                            </form>
                        ) : (
                            <button className={s.thankYouButton}>Спасибо за вашу заявку!</button>
                        )}
                    </div>
                    <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
                        <YandexMap />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsWrap;
