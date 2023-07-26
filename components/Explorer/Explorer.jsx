import React from 'react';
import styles from './Explorer.module.scss';

const explorerItems = [
    {
        name: 'home.jsx',
        path: '/',
        icon: 'react_icon.svg',
    },
    {
        name: 'about.html',
        path: '/about',
        icon: 'html_icon.svg',
    },
    {
        name: 'contact.css',
        path: '/contact',
        icon: 'css_icon.svg',
    },
    {
        name: 'projects.js',
        path: '/projects',
        icon: 'js_icon.svg',
    },
    {
        name: 'skills.json',
        path: '/skills',
        icon: 'json_icon.svg',
    },
    {
        name: 'github.md',
        path: '/github',
        icon: 'markdown_icon.svg',
    },
];

const Explorer = () => {
    const [portfolioOpen, setPortfolioOpen] = useState(true);
    return <div>Explorer</div>;
};

export default Explorer;
