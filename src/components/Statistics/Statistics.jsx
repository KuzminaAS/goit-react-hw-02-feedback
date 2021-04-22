import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ title, good, neutral, bad, total, positivePersentage }) => {

    return (
    <ul className={styles.list}>
        <h3 className={styles.title}>{title}</h3>

          <li className={styles.item}>Good: {good}</li>
          <li className={styles.item}>Neutral: {neutral}</li>
          <li className={styles.item}>Bad: {bad}</li>
          <li className={styles.item}>Total: {total} </li>
          <li className={styles.item}>Positive feedback: {positivePersentage}%</li>
      </ul>
    )
};


export default Statistics;


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePersentage: PropTypes.number.isRequired
}

