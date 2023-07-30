import React from 'react';
import { motion } from 'framer-motion';
import SkillsItem from '@/components/Skills/SkillsItem';
import style from '@/components/Skills/Skills.module.scss';

const skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={style.skills}
        >
            <h2 className={style.skills_title}>SKILLS</h2>
            <h3 className={style.skills_sub}>
                hover over a skill for currency proficiency
            </h3>

            <div className={style.items}>
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
                <SkillsItem />
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Skills' },
    };
}
export default skills;
