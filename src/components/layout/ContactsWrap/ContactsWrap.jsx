import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import YandexMap from '../../ui/YandexMap/YandexMap'
import s from './ContactsWrap.module.scss'

const ContactsWrap = () => {
    return (
        <>
            <section className={s.contactswrap}>
                <div className="container">
                    <SectionTitle title='Контакты' />

                    <div className={s.wrap}>
                        <h3>Готовы начать? <br /> Оставьте заявку</h3>

                        <div className={s.box}>
                            <form action="">
                                <h3>Готовы начать? Оставьте заявку</h3>

                                <input type="text" placeholder='Ваше имя' />
                                
                                <input type="text" placeholder='Ваш номер телефона' />

                                <button>получить консультацию</button>
                            </form>
                        </div>

                        <div style={{borderRadius: '20px', overflow:'hidden'}}>

                            <YandexMap />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactsWrap