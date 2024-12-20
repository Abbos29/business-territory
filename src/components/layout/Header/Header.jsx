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
              <a className={s.tel} href="tel:+79209209292">
                <img src="/icon-tel.svg" alt="icon" />
                + 7 920 920 92 92
              </a>

              <a href="">
                <img src="/icon-tg.svg" alt="icon" />
              </a>

              <a href="">
                <img src="/icon-wapp.svg" alt="icon" />
              </a>
            </div>

            <div onClick={toggleMenu} className={s.burger}>
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