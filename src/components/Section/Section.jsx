import css from './Section.module.css'
import PropTypes from 'prop-types';


export const SectionTitle = ({ title, children }) => {
    return (
        <section className={css.mainTitle}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};