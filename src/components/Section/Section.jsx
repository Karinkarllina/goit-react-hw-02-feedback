import css from './Section.module.css'


export const SectionTitle = ({ title, children }) => {
    return (
        <section className={css.mainTitle}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}