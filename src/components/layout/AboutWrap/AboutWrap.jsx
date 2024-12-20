import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import s from './AboutWrap.module.scss'

const AboutWrap = () => {
    return (
        <>
            <section className={s.aboutwrap}>
                <div className="container">
                    <SectionTitle title='О КОМПАНИИ' />
                    
                    <div className={s.wrap}>
                        <img src="/aboutwrap-img.jpg" alt="img" />

                        <div className={s.box}>
                            <p>Наша компания работает на рынке бухгалтерских и юридических услуг с 2013 года.</p>
                            <p>Вот уже 10 лет мы помогаем людям быть счастливыми и заниматься своим любимым делом.</p>
                            <p>Мы избавляем наших клиентов от налоговых проблем.</p>
                            <p>Наши компетентные сотрудники с радостью проконсультируют по самым сложным вопросам налогообложения, помогут сориентироваться в море непредсказуемого налогового законодательства.</p>
                            <p>Вам не надо тратить время и нервы на общение с налоговыми органами – МЫ это сделаем за Вас.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutWrap