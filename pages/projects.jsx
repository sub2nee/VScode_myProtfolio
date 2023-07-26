import React from 'react';

const projects = () => {
    return <div>projects</div>;
};
export async function getStaticProps() {
    return {
        props: { title: 'Projects' },
    };
}

export default projects;
