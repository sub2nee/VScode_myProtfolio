import Head from 'next/head';

const CustomHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Subin is an avid full stack web developer building websites and applications you'd love to use"
            />
            <meta property="og:title" content="Binzz's Portfolio" />
        </Head>
    );
};

export default CustomHead;

CustomHead.defaultProps = {
    title: 'Binzz',
};
