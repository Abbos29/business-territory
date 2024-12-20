import s from './SectionTitle.module.scss'

const SectionTitle = ({ title = "Заголовок", span }) => {
    return (
        <>
            <h2 className={s.title}>{title} <span>{span}</span></h2>
        </>
    )
}

export default SectionTitle