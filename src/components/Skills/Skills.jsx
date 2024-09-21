import React from 'react';
import styles from "./Skills.module.css";

import skillset from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';

const Skills = () => {
    const hasExperience = history.some(historyItem => historyItem.organisation !== "");

    return (
        <section className={styles.container} id='skills'>
            <h2 className={styles.title}>Skills</h2>
            <div className={`${styles.content} ${!hasExperience ? styles.fullWidthSkills : ''}`}>
                <div className={styles.skills}>
                    {skillset.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />  
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>

                {hasExperience && (
                    <ul className={styles.history}>
                        {history.map((historyItem, id) => {
                            if (historyItem.organisation !== "") {
                                return (
                                    <li key={id} className={styles.historyItem}>
                                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                        <div className={styles.historyItemDetails}>
                                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                            <ul>
                                                {historyItem.experiences.map((experience, expId) => (
                                                    <li key={expId}>{experience}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default Skills;
