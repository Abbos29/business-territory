import Button from '../../ui/Button/Button'
import HeroWrap from '../../ui/HeroWrap/HeroWrap'
import WhyUs from '../WhyUs/WhyUs'
import s from './ServiceSingle.module.scss'

const ServiceSingle = ({ service }) => {
    return (
        <>
            <section className={s.serviceSingle}>
                <div className="container">

                    <HeroWrap image={'/wrap-2.png'} oldPrice={service.oldPrice} price={service.price}>{service.title}</HeroWrap>

                    <div className={s.btn}>
                        <Button>заказать консультацию</Button>
                    </div>

                    <div className={s.wrap}>

                        {service.description.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>


                    <WhyUs />



                </div>
            </section>
        </>
    )
}

export default ServiceSingle