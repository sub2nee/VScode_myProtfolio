import React from 'react';
import Image from 'next/image';
import styles from './ThemeInfo.module.scss';

const ThemeInfo = ({ icon, name, publisher, theme }) => {
    const setTheme = theme => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    return (
        <div className={styles.Theme_container}>
            <Image src={icon} alt={name} height={140} width={150} />
            <div className={styles.info}>
                <div>
                    <h3>{name}</h3>
                    <h5>{publisher}</h5>
                </div>
                <button onClick={() => setTheme(theme)}>Set Theme</button>
            </div>
        </div>
    );
};

export default ThemeInfo;
