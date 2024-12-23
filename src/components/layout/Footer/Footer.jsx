import { Link } from 'react-router-dom';
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={s.footer}>
            <div className="container">
                <div className={s.wrap}>
                    <a className={s.phone} href='tel:89959298173'>8-995-929-8173</a>


                    <div className={s.menu}>
                        <p>МЕНЮ</p>
                        <Link to="/about">О КОМПАНИИ</Link>
                        <Link to="/services">НАШИ УСЛУГИ</Link>
                    </div>

                    <div className={s.menu}>
                        <p>КАК НАС НАЙТИ</p>
                        <a target='_blank' href="https://yandex.uz/maps/-/CHQiBJJ8">Офис: г. Липецк, ул. Угловая, 11, офис 28</a>
                        <a href="">09:00-19:00</a>
                    </div>
                </div>

                <h3 className={s.title}>ТЕРРИТОРИЯ БИЗНЕСА</h3>
            </div>
        </section>
    );
};

export default Footer;
