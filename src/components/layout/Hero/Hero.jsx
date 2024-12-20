import Button from '../../ui/Button/Button'
import HeroWrap from '../../ui/HeroWrap/HeroWrap'
import s from './Hero.module.scss'

const Hero = () => {
    return (
        <>
            <section className={s.hero}>
                <div className="container">
                    <div className={s.wrapper}>
                        <HeroWrap image={'/wrap-1.png'}>БУХГАЛТЕРСКИЕ услуги</HeroWrap>
                        <p>Мы предлагаем широкий спектр услуг, включая ведение бухгалтерии, налоговое консультирование и финансовый анализ.  Наша команда опытных специалистов поможет вам оптимизировать расходы и минимизировать налоговые риски. Мы заботимся о вашем бизнесе, обеспечивая точность и надежность на каждом этапе.</p>
                        <Button>получить консультацию</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero