import { Link } from 'react-router-dom';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={s.footer}>
            <div className="container">
                <div className={s.wrap}>
                    <a className={s.phone} href="">+7 (910) 428 41 22</a>

                    <div className={s.menu}>
                        <p>МЕНЮ</p>
                        <Link to="/">О КОМПАНИИ</Link>
                        <Link to="/">НАШИ УСЛУГИ</Link>
                        <Link to="/">НАШИ УСЛУГИ</Link>
                    </div>

                    <div className={s.menu}>
                        <p>КАК НАС НАЙТИ</p>
                        <Link to="/">Москва, улица Южнопортовая, 5</Link>
                        <Link to="/">09:00-19:00</Link>
                    </div>
                </div>
                
                <h3 className={s.title}>ТЕРРИТОРИЯ БИЗНЕСА</h3>
            </div>
        </section>
    );
};

export default Footer;
