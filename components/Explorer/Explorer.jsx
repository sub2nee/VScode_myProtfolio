import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import ChevronRight from '../icons/ChevronRight';
import styles from './Explorer.module.scss';

const explorerItems = [
    {
        name: 'home.jsx',
        path: '/',
        icon: 'images/react_icon.svg',
    },
    {
        name: 'about.html',
        path: '/about',
        icon: 'images/html_icon.svg',
    },
    {
        name: 'contact.css',
        path: '/contact',
        icon: 'images/css_icon.svg',
    },
    {
        name: 'projects.js',
        path: '/projects',
        icon: 'images/js_icon.svg',
    },

    {
        name: 'github.md',
        path: '/github',
        icon: 'images/markdown_icon.svg',
    },
];

const Explorer = () => {
    const [portfolioOpen, setPortfolioOpen] = useState(true);

    return (
        <div className={styles.explorer}>
            <p className={styles.title}>Explorer</p>
            <div>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    id="portfolio-checkbox"
                    checked={portfolioOpen}
                    onChange={() => setPortfolioOpen(!portfolioOpen)}
                />
                <label htmlFor="portfolio-checkbox" className={styles.heading}>
                    <ChevronRight
                        className={styles.chevron}
                        style={
                            portfolioOpen ? { transform: 'rotate(90deg)' } : {}
                        }
                    />
                    Portfolio
                </label>
                <div
                    className={styles.files}
                    style={
                        portfolioOpen
                            ? { display: 'block' }
                            : { display: 'none' }
                    }
                >
                    {explorerItems.map(item => (
                        <Link href={item.path} key={item.name}>
                            <div className={styles.file}>
                                <Image
                                    src={`/${item.icon}`}
                                    alt={item.name}
                                    height={18}
                                    width={18}
                                />{' '}
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explorer;
