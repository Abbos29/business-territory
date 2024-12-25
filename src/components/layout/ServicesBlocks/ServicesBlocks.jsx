import { Link } from 'react-router-dom';
import s from './ServicesBlocks.module.scss';

import servicesData from '/public/servicesData.js';

const ServicesBlocks = () => {
    return (
        <div className={s.wrap}>
            <div className={s.item}></div>

            <Link to={`/services/${servicesData[0].id}`} className={s.item}>
                <h3>{servicesData[0].title}</h3>
                <div>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
            </Link>

            <div className={s.item}></div>

            <Link to={`/services/${servicesData[1].id}`} className={`${s.item} ${s.blue}`}>
                <h3>{servicesData[1].title}</h3>
                <div>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
            </Link>

            <div className={s.item}></div>

            <Link to={`/services/${servicesData[2].id}`} className={`${s.item} ${s.blue}`}>
                <h3>{servicesData[2].title}</h3>
                <div>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
            </Link>

            <div className={s.item}></div>

            <Link to={`/services/${servicesData[3].id}`} className={s.item}>
                <h3>{servicesData[3].title}</h3>
                <div>
                    <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.39922 32.7626L18.1992 17.0009L1.39922 1.23926" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
            </Link>
        </div>
    );
};

export default ServicesBlocks;
