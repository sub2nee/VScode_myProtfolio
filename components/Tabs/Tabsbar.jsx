import React from 'react';
import Tab from './Tab';
import styles from './Tabsbar.module.scss';

const Tabsbar = () => {
    return (
        <div className={styles.tabs}>
            <Tab icon="/images/react_icon.svg" filename="home.jsx" path="/" />
            <Tab
                icon="/images/html_icon.svg"
                filename="about.html"
                path="/about"
            />
            <Tab
                icon="/images/css_icon.svg"
                filename="contact.css"
                path="/contact"
            />
            <Tab
                icon="/images/js_icon.svg"
                filename="projects.js"
                path="/projects"
            />

            <Tab
                icon="/images/markdown_icon.svg"
                filename="github.md"
                path="/github"
            />
        </div>
    );
};

export default Tabsbar;
