import { useEffect } from 'react';

/**components import */
import Layout from '../components/Layout/Layout';
import Head from '../components/Head';

/** CSS import */
import '../styles/globals.css';
import '../styles/themes.css';
import '../styles/typography.css';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            document.documentElement.setAttribute(
                'data-theme',
                localStorage.getItem('theme')
            );
        }
    }, []);

    return (
        <Layout>
            <Head title={`CODE ver. ${pageProps.title}`} />
            <Component {...pageProps} />
        </Layout>
    );
}
