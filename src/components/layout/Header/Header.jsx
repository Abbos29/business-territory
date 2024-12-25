import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import { useState } from 'react'

const Header = () => {

  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(prev => !prev)
  }

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <Link to={'/'} className={s.logo}><img src="/logo.png" alt="logo" /></Link>

            <div className={`${s.menu} ${isActive ? s.active : null}`}>
              <Link to={'/about'}>О компании</Link>
              <Link to={'/services'}>Наши услуги</Link>
              <Link to={'/contacts'}>Контакты</Link>
            </div>

            <div className={s.box}>
              <a className={s.tel} href="tel:89959298173">
                <img src="/icon-tel.svg" alt="icon" />
                8-995-929-8173
              </a>

              <a target='_blank' href="https://t.me/buhgalter_48">
                <img src="/icon-tg.svg" alt="icon" />
              </a>

              <a target='_blank' href="https://wa.me/89959298173">
                <img src="/icon-wapp.svg" alt="icon" />
              </a>

              {/* <a target='_blank' href="https://vk.com/1cbo_business">
                <img src="https://cdn-icons-png.freepik.com/256/3670/3670254.png?semt=ais_hybrid" alt="icon" />
              </a> */}
            </div>

            <div onClick={toggleMenu} className={`${s.burger} ${isActive ? s.active : null}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header