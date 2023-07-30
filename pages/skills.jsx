import React from 'react';

const skills = () => {
    return <div>skills</div>;
};

export async function getStaticProps() {
    return {
        props: { title: 'Skills' },
    };
}
export default skills;
