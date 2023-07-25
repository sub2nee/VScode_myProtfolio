import React from 'react';

export default function projects() {
    return <div>projects</div>;
}
export async function getStaticProps() {
    return {
        props: { title: 'Projects' },
    };
}
