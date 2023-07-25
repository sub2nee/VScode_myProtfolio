import React from 'react';

/**Pages import */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Tabsbar from '../Tabs/Tabsbar';

/**CSS import */
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Sidebar */}
            <div className={styles.main}>
                <Sidebar />
                {/* Explorer */}
                <div style={{ width: '100%' }}>
                    {/* Tabs */}
                    <Tabsbar />
                    <main className={styles.content}>{children}</main>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Layout;
