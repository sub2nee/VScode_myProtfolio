import React from 'react';
import Tab from './Tab';
import styles from './Tab.module.scss';

const Tabsbar = () => {
    return (
        <div className={styles.Tabs}>
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
                icon="/images/json_icon.svg"
                filename="skills.json"
                path="/skills"
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
