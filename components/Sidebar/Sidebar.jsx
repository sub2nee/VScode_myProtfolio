import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

/**icons import */
import FilesIcon from '../icons/FilesIcon';
import CodeIcon from '../icons/CodeIcon';
import MailIcon from '../icons/MailIcon';
import ExtentionIcon from '../icons/ExtentionIcon';
import AccountIcon from '../icons/AccountIcon';
import SettingsIcon from '../icons/SettingsIcon';

/**CSS import */
import styles from './Sidebar.module.scss';

const sidebarTopItems = [
    {
        Icon: FilesIcon,
        path: '/',
    },

    {
        Icon: CodeIcon,
        path: '/projects',
    },

    {
        Icon: MailIcon,
        path: '/contact',
    },
    {
        Icon: ExtentionIcon,
        path: '/github',
    },
];

const sidebarBottomItems = [
    {
        Icon: AccountIcon,
        path: '/about',
    },
    {
        Icon: SettingsIcon,
        path: '/settings',
    },
];

const Sidebar = () => {
    const router = useRouter();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarTop}>
                {sidebarTopItems.map(({ Icon, path }) => (
                    <Link href={path} key={path}>
                        <div
                            className={`${styles.iconContainer} ${
                                router.pathname === path && styles.active
                            }`}
                        >
                            <Icon
                                fill={
                                    router.pathname === path
                                        ? 'rgb(225, 228, 232)'
                                        : 'rgb(106, 115, 125)'
                                }
                                className={styles.icon}
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.sidebarBottom}>
                {sidebarBottomItems.map(({ Icon, path }) => (
                    <div className={styles.iconContainer}>
                        <Link href={path} key={path}>
                            <Icon
                                fill={
                                    router.pathname === path
                                        ? 'rgb(225, 228, 232)'
                                        : 'rgb(106, 115, 125)'
                                }
                                className={styles.icon}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
