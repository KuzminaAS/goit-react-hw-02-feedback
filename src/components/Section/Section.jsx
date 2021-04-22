import React from 'react';

import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({title, children}) => {
    return (
        <section className={styles.section}>
     <div className={styles.container}>
                <h2 className={styles.title}> {title} </h2>
                <hr className={styles.line}></hr>
        {children}
     </div>
       </section> 
    )
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired
}