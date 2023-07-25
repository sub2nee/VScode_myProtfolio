import React from 'react';

export default function about() {
    return <div>about</div>;
}
export async function getStaticProps() {
    return {
        props: { title: 'About' },
    };
}
