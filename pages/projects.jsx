import React from 'react';
import { getProjects } from './api/projects';
import styled from 'styled-components';
import ProjectCard from '@/components/Projects/ProjectCard';
import { motion } from 'framer-motion';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5em;

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ProjectsTitle = styled.h2`
    margin-bottom: 0.8em;
`;

const projects = ({ projects }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <ProjectsTitle>It's my works! 💻</ProjectsTitle>
            <GridContainer>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </GridContainer>
        </motion.div>
    );
};
export async function getStaticProps() {
    const projects = getProjects();
    return {
        props: { title: 'Projects', projects },
    };
}

export default projects;
