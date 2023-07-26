import React from 'react';

const contact = () => {
    return <div>contact</div>;
};
export async function getStaticProps() {
    return {
        props: { title: 'Contact' },
    };
}

export default contact;
