import styles from './ProjectCards.module.css'; // Import the CSS module
import React from 'react';
const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <div className={styles.card} onClick={() => setOpenModal({ state: true, project: project })}>
            <img src={project.image} className={styles.image} alt={project.title} />
            <div className={styles.tags}>
                {project.tags?.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
            </div>
            <div className={styles.details}>
                <div className={styles.title}>{project.title}</div>
                <div className={styles.description}>{project.description}</div>
            </div>
        </div>
    );
};

export default ProjectCards;