import s from './HeroWrap.module.scss'

const HeroWrap = ({ children, image }) => {
    return (
        <>
            <div className={s.wrap} style={{ backgroundImage: `url(${image})` }}>
                <h1>{children}</h1>
            </div>
        </>
    )
}

export default HeroWrap