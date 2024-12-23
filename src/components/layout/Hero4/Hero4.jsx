import HeroWrap from '../../ui/HeroWrap/HeroWrap'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import s from './Hero4.module.scss'

const Hero4 = () => {
    return (
        <>
            <section className={s.hero4}>
                <div className="container">
                    <HeroWrap image={'/wrap-5.png'}>Контакты</HeroWrap>

                    <div className={s.wrap}>
                        <div className={s.title}>

                        <SectionTitle title='КАК С НАМИ' span='СВЯЗАТЬСЯ' />
                        </div>

                        <div className={s.inner}>
                            <div>
                                <h3>Телефон</h3>
                                <a href='tel:89959298173'>8-995-929-8173</a>
                            </div>

                            <div>
                                <h3>E-mail</h3>
                                <a href="mailto:buhgalter-48@mail.ru">buhgalter-48@mail.ru</a>
                            </div>

                            <div>
                                <h3>Адрес</h3>
                                <a target='_blank' href="https://yandex.uz/maps/-/CHQiBJJ8">Офис: г. Липецк, ул. Угловая, <br /> 11, офис 28</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero4