import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.optionsList}>
    { options.map(option => {
        return (
            <li key={option} className={css.optionsItem}>
            <button name={option} type='button' onClick={onLeaveFeedback} className={css.optionBtn}>{option}</button>
            </li>
        )
      })
      }
      </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};