/**components import */
import Layout from '../components/Layout/Layout';
import Head from '../components/Head';

/** CSS import */
import '../styles/globals.css';
import '../styles/themes.css';
import '../styles/typography.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Head title={`CODE ver. ${pageProps.title}`} />
            <Component {...pageProps} />;
        </Layout>
    );
}
