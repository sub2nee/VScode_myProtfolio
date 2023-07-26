import React from 'react';
import styles from '../components/ThemeInfo/ThemeInfo.module.scss';
import ThemeInfo from '@/components/ThemeInfo/ThemeInfo';

const settings = () => {
    return (
        <>
            <h2 className={styles.setting_title}>Setting Color Themes ⚙️</h2>
            <div className={styles.setting_container}>
                <ThemeInfo
                    name="GitHub Dark"
                    icon="/images/themes/github-dark.png"
                    publisher="GitHub"
                    theme="github-dark"
                    description="GitHub theme for VS Code"
                />
                <ThemeInfo
                    name="Dracula"
                    icon="/images/themes/dracula.png"
                    publisher="Dracula Theme"
                    theme="dracula"
                    description="Official Dracula Theme. A dark theme for many editors, shells, and more."
                />
                <ThemeInfo
                    name="Ayu Dark"
                    icon="/images/themes/ayu.png"
                    publisher="teabyii"
                    theme="ayu-dark"
                    description="A simple theme with bright colors."
                />
                <ThemeInfo
                    name="Ayu Mirage"
                    icon="/images/themes/ayu.png"
                    publisher="teabyii"
                    theme="ayu-mirage"
                    description="A simple theme with bright colors."
                />
                <ThemeInfo
                    name="Nord"
                    icon="/images/themes/nord.png"
                    publisher="arcticicestudio"
                    theme="nord"
                    description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
                />
                <ThemeInfo
                    name="Night Owl"
                    icon="/images/themes/night-owl.png"
                    publisher="sarah.drasner"
                    theme="night-owl"
                    description="A VS Code theme for the night owls out there."
                />
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Settings' },
    };
}
export default settings;
