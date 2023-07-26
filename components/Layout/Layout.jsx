import React from 'react';

/**Pages import */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Tabsbar from '../Tabs/Tabsbar';
import Explorer from '../Explorer/Explorer';

/**CSS import */
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.layout}>
                <Sidebar />
                <Explorer />
                <div className={styles.main}>
                    <Tabsbar />
                    <main className={styles.content}>{children}</main>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
