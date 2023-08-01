import Head from 'next/head';

const CustomHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Subin is an avid full stack web developer building websites and applications you'd love to use"
            />
            <meta property="og:title" content="Binzz's VSCODE Portfolio" />
            <meta
                property="og:description"
                content="사용하고 싶은 웹사이트를 구축하는 풀스택 개발자입니다."
            />
            <meta property="og:image" content="https://imgur.com/DnWksVS.png" />
            <meta property="og:url" content="https://vscode-binzz.vercel.app" />
        </Head>
    );
};

export default CustomHead;

CustomHead.defaultProps = {
    title: 'Binzz',
};
