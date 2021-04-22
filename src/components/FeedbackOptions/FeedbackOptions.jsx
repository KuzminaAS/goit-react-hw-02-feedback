import shortid from "shortid";

import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttonElements = options.map(name => <button key={shortid.generate()} className={styles.btn} type='button' onClick={() => onLeaveFeedback(name)}>{name}</button>)
    return (
        <div className={styles.btnGroup}>
            {buttonElements}
        </div>
    )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired)
}