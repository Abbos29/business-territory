import Button from '../../ui/Button/Button'
import HeroWrap from '../../ui/HeroWrap/HeroWrap'
import ServicesBlocks from '../ServicesBlocks/ServicesBlocks'
import s from './Hero3.module.scss'

const Hero3 = () => {
    return (
        <>
            <section className={s.hero3}>
                <div className="container">
                    <HeroWrap image={'/wrap-4.png'}>наши услуги</HeroWrap>

                    <div style={{ marginTop: '40px' }}>
                        <ServicesBlocks />
                    </div>

                    {/* <div className={s.wrap}>
                        <h3>Юридические услуги от регистрации ИП, ООО, НКО до ведения отчетов вашего бизнеса в Одинцово, Москве и МО</h3>

                        <p>Профессиональная юридическая помощь в подготовке документов при:</p>
                        <p> 1) Регистрации, внесении изменений и ликвидации юридических лиц любой организационно-правовой формы собственности (ООО, НКО, ПГСК и т.д.);</p>
                        <p> 2) Регистрации, внесении изменений и прекращении деятельности в качестве индивидуального предпринимателя;</p>
                        <p> 3) Составлении договоров (поставки, купли-продажи, аренды, трудовых и т.д.);</p>
                        <p> 4) Подборе оптимального режима налогообложения;</p>
                        <p> 5) Поставке на учёт в качестве плательщика УСН, ЕНВД, Патентной системе налогообложения (ПСН);</p>
                        <p> 6) Заполнение деклараций, 3-НДФЛ и др.</p>
                        <p> 7) Получении разрешения (лицензии) на деятельность такси;</p>
                        <p> 8) Бухгалтерские услуги.</p>
                        <p>Создание и изготовление печатей, штампов. А так же рекламные штампы.</p>

                        <Button>Заказать консультацию</Button>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Hero3