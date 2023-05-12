import PropTypes from 'prop-types';
import css from './Statistics.module.css'


export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
            <ul className={css.statisticsList}>
                <li className={css.statisticsItem}>
                    <p className={css.optionName}>Good: <span className={css.statNumber}>{good}</span></p>
                </li>
                <li className={css.statisticsItem}>
                    <p className={css.optionName}>Neutral: <span className={css.statNumber}>{neutral}</span></p>
                </li>
                <li className={css.statisticsItem}>
                    <p className={css.optionName}>Bad: <span className={css.statNumber}>{bad}</span></p>
                </li> 
                <li className={css.statisticsItem}>
                    <p className={css.optionName}>Total: <span className={css.statNumber}>{total}</span></p>
                </li>
                <li className={css.statisticsItem}>
                    <p className={css.optionName}>Positive Feedback: <span className={css.statNumber}>{positivePercentage}%</span></p>
                </li>
        </ul>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};