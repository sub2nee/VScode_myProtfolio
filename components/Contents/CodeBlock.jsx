import React from 'react';
import styles from './CodeBlock.module.scss';

const CodeBlock = ({ children }) => {
    return <div className={styles.codeblock}>{children}</div>;
};

export default CodeBlock;
