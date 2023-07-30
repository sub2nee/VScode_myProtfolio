import React from 'react';
import styles from './CodeLine.module.scss';

const CodeLine = ({ children }) => {
    return <div className={styles.codeline}>{children}</div>;
};

export default CodeLine;
