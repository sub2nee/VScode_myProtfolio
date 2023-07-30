import React from 'react';
import style from '@/components/Skills/SkillsItem.module.scss';
import { motion } from 'framer-motion';

const SkillsItem = ({ directionLeft }) => {
    return (
        <div className={style.itemContainer}>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src="https://imgur.com/a/n8pqm1o.png"
                className={style.item_img}
            />
            <div className={style.proficiency_container}>
                <div className={style.proficiency}>
                    <p className={style.proficiency_txt}>100%</p>
                </div>
            </div>
        </div>
    );
};

export default SkillsItem;
