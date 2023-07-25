import React from 'react';

export default function skills() {
    return <div>skills</div>;
}

export async function getStaticProps() {
    return {
        props: { title: 'Projects' },
    };
}
