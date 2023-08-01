import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

const text = "binzz's Portfolio - Visual Studio Code";
const Header = () => {
    return (
        <section className={styles.header}>
            <Image
                src="/images/vscode_icon.svg"
                alt="VSCode"
                height={15}
                width={15}
                className={styles.icon}
            />

            <div className={styles.items}>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Go</p>
                <p>Run</p>
                <p>Terminal</p>
                <p>Help</p>
            </div>
            <p className={styles.title}>{text}</p>
            <div className={styles.windowButtons}>
                <span className={styles.minimize}></span>
                <span className={styles.maximize}></span>
                <span className={styles.close}></span>
            </div>
        </section>
    );
};
export default Header;
