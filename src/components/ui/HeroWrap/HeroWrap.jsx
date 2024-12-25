import { useLocation } from 'react-router-dom'
import s from './HeroWrap.module.scss'

const HeroWrap = ({ children, image, oldPrice, price }) => {

    const location = useLocation()

    const isAccountingSupport = location.pathname === '/services/accounting-support'



    return (
        <>
            <div className={s.wrap} style={{ backgroundImage: `url(${image})` }}>
                <h1 className={isAccountingSupport ? s.miniTitle : ''}>{children}</h1>


                {price && oldPrice && (
                    <div>
                        <p>{price} Р</p>
                        <s>{oldPrice} Р</s>
                    </div>
                )}

            </div>
        </>
    )
}

export default HeroWrap