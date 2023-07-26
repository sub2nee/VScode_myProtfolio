import React from 'react';

const settings = () => {
    return <div>settings</div>;
};
export async function getStaticProps() {
    return {
        props: { title: 'Settings' },
    };
}
export default settings;
