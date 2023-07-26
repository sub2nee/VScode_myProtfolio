import React from 'react';

const about = () => {
    return <div>about</div>;
};
export async function getStaticProps() {
    return {
        props: { title: 'About' },
    };
}

export default about;
