import Image from 'next/image';
import styles from '@/components/Projects/ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img_wrap}>
                <Image
                    src={project.image}
                    alt={project.name}
                    width={535}
                    height={300}
                />
                <div className={styles.copy_tag}>
                    {project.copy === 'personal' ? '🙋‍♀️' : '👨‍👩‍👦‍👦'} {project.copy}
                </div>
            </div>

            <div className={styles.content}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className={styles.tags}>
                    {project.tags.map(tag => (
                        <span key={tag} className={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={styles.cta}>
                    {project.source_code && (
                        <a
                            href={project.source_code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline}
                        >
                            Source Code
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.underline}
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
