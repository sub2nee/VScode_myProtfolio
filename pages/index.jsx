import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: { title: 'Home' },
    };
}