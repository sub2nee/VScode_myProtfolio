import React from 'react';
import { motion } from 'framer-motion';

/**component import */
import CodeBlock from '@/components/Contents/CodeBlock';
import CodeLine from '@/components/Contents/CodeLine';
import EmailForm from '@/components/Contact/EmailForm';

/** CSS import*/
import styled from 'styled-components';

const socialItems = [
    {
        social: 'email',
        link: 'cherish.sub2nee@gmail.com',
        href: 'mailto:cherish.sub2nee@gmail.com',
    },
    {
        social: 'github',
        link: 'sub2nee',
        href: 'https://github.com/sub2nee',
    },
    {
        social: 'instagram',
        link: 'binzz._.s2',
        href: 'https://www.instagram.com/binzz._.s2/',
    },

    {
        social: 'notion',
        link: "binzz's notion",
        href: 'https://wistful-crocodile-0b1.notion.site/a35f0b4dedfa4044a3c40d26549476a4?pvs=4',
    },
    {
        social: 'kakao',
        link: 'kakao open chat',
        href: 'https://open.kakao.com/o/sF28ds4e',
    },
];

const ContactTitle = styled.h2`
    margin-bottom: 0.8em;
`;

const ContactItem = styled.div`
    margin-bottom: 1em;

    .socials {
        color: var(--accent-color);
        margin-right: 0.5em;
    }

    .social_item {
        display: inline-block;
        margin: 0 0.3em 0 2em;
    }
`;

const contact = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 30 }}
            >
                <ContactTitle>Contact with me! 🤙</ContactTitle>
                <ContactItem>
                    <CodeBlock>
                        <CodeLine>
                            <span className="socials">.socials</span> {'{'}
                        </CodeLine>
                        {socialItems.map((item, idx) => {
                            return (
                                <CodeLine key={idx}>
                                    <span className="social_item">
                                        {item.social}:
                                    </span>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.link}
                                    </a>
                                    <span>;</span>
                                </CodeLine>
                            );
                        })}
                        <CodeLine>{'}'}</CodeLine>
                    </CodeBlock>
                </ContactItem>

                <motion.div
                    animate={{ x: 0, y: -20 }}
                    transition={{ delay: 0 }}
                >
                    <ContactItem>
                        <EmailForm />
                    </ContactItem>
                </motion.div>
            </motion.div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Contact' },
    };
}

export default contact;
