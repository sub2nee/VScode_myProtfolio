import Image from 'next/image';
import { motion } from 'framer-motion';

/** component import */
import RepoCard from '@/components/Github/RepoCard';

/** CSS import */
import styles from '@/components/Github/GithubPage.module.scss';

const github = ({ repos, user }) => {
    return (
        <>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <div className={styles.user}>
                    <div>
                        <Image
                            src={user.avatar_url}
                            className={styles.avatar}
                            alt={user.login}
                            width={50}
                            height={50}
                        />
                        <h3 className={styles.username}>{user.login}</h3>
                    </div>
                    <div>
                        <h3>{user.public_repos} repos</h3>
                    </div>
                    <div>
                        <h3>{user.followers} followers</h3>
                    </div>
                </div>
                <div className={styles.container}>
                    {repos.map(repo => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export async function getStaticProps() {
    const userRes = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
        {
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
        }
    );
    const user = await userRes.json();

    const repoRes = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
        {
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
        }
    );
    let repos = await repoRes.json();

    if (!Array.isArray(repos)) {
        repos = [];
    }
    repos = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);

    return {
        props: { title: 'GitHub', repos, user },
        revalidate: 10,
    };
}

export default github;
