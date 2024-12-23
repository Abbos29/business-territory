import { Link } from 'react-router-dom';
import s from './ServicesBlocks.module.scss';

const ServicesBlocks = () => {
    return (
        <div className={s.wrap}>
            <div className={s.item}></div>

            <div className={s.item}>
                <h3>Декларации <br /> 3 - НДФЛ</h3>
                <Link to={'/'}>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            <div className={s.item}></div>

            <div className={`${s.item} ${s.blue}`}>
                <h3>Бухгалтерское сопровождение</h3>
                <Link to={'/'}>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            <div className={s.item}></div>

            <div className={`${s.item} ${s.blue}`}>
                <h3>Регистрация ООО и ИП</h3>
                <Link to={'/'}>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            <div className={s.item}></div>

            <div className={s.item}>
                <h3>Ликвидация ООО и ИП</h3>
                <Link to={'/'}>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ServicesBlocks;