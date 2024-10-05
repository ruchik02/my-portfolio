import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import styles from './ProjectDetails.module.css'
import React from 'react';
const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img src={project?.image} alt="project" className={styles.image} />
                    <div className={styles.title}>{project?.title}</div>
                    <div className={styles.date}>{project.date}</div>
                    <div className={styles.tags}>
                        {project?.tags.map((tag, index) => (
                            <div key={index} className={styles.tag}>{tag}</div>
                        ))}
                    </div>
                    <div className={styles.desc}>{project?.description}</div>
                    {project.member && (
                        <>
                            <div className={styles.label}>Members</div>
                            <div className={styles.members}>
                                {project?.member.map((member, index) => (
                                    <div key={index} className={styles.member}>
                                        <img src={member.img} alt="member" className={styles.memberImage} />
                                        <div className={styles.memberName}>{member.name}</div>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <LinkedIn />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div className={styles.buttonGroup}>
                        <a href={project?.github} className={`${styles.button} ${styles.dull}`} target="_blank" rel="noopener noreferrer">View Code</a>
                        <a href={project?.webapp} className={styles.button} target="_blank" rel="noopener noreferrer">View Live App</a>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetails;