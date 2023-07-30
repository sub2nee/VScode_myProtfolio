import React from 'react';

/**component import */
import CodeBlock from '@/components/Contents/CodeBlock';
import CodeLine from '@/components/Contents/CodeLine';
import EmailForm from '@/components/Contact/EmailForm';

/** CSS import*/
import style from '@/components/Contact/Contact.module.scss';

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

const contact = () => {
    return (
        <>
            <h2 className={style.contact_tit}>Contact with me! 🤙</h2>

            <div className={`${style.contact_item}`}>
                <CodeBlock>
                    <CodeLine>
                        <span className={style.socials}>.socials</span> {'{'}
                    </CodeLine>
                    {socialItems.map((item, idx) => {
                        return (
                            <CodeLine key={idx}>
                                <span className={style.social_item}>
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
            </div>
            <div className={`${style.contact_item}`}>
                <EmailForm />
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Contact' },
    };
}

export default contact;
