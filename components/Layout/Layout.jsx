import React from 'react';

/**Pages import */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**CSS import */
import styles from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Sidebar */}
            <div className={styles.main}>
                <Sidebar />
            </div>
            {/* Explorer */}

            {/* Tabs */}

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Layout;
