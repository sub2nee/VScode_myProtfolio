import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import VscodeIcon from '@/components/icons/VscodeIcon';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Home() {
    const [text] = useTypewriter({
        words: ["Hello Binzz's World!"],
        loop: 1,
        delaySpeed: 3000,
    });

    return (
        <>
            <div className={styles.home}>
                <div className={styles.inner}>
                    <VscodeIcon className={styles.icon_vscode} />

                    <div className={styles.typewriter}>
                        <h1>
                            {text}
                            <Cursor />
                        </h1>
                    </div>
                    <p className={styles.heading}>FULLSTACK-DEVELOPER</p>

                    <div className={styles.buttons}>
                        <Link href="/projects">
                            <button
                                className={`${styles.button} ${styles.button_work}`}
                            >
                                View Work
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button
                                className={`${styles.button} ${styles.button_contact}`}
                            >
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: { title: 'Home' },
    };
}
