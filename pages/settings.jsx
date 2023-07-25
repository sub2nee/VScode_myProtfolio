import React from 'react';

export default function settings() {
    return <div>settings</div>;
}
export async function getStaticProps() {
    return {
        props: { title: 'Settings' },
    };
}
