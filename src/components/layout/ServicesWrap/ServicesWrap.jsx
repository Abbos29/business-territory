import { Link } from 'react-router-dom'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import s from './ServicesWrap.module.scss'
import ServicesBlocks from '../ServicesBlocks/ServicesBlocks'

const ServicesWrap = () => {
    return (
        <>
            <section className={s.serviceswrap}>
                <div className="container">
                    <SectionTitle title='НАШИ' span="услуги" />

                    <ServicesBlocks />
                </div>
            </section>
        </>
    )
}

export default ServicesWrap