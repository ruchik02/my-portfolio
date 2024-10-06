import { useState } from 'react';
import styles from './ProjectStyle.module.css' // Import the CSS module
import ProjectCards from '../Cards/ProjectCards';
import { projects } from '../../constants/data';
const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((project) => project.category === toggle);

  return (
    <div className={styles.container} id="projects">
      <div className={styles.wrapper}>
        <div className={styles.title}>Projects</div>
        {/* <div className={styles.desc}>
          I have worked on a wide range of projects. From web apps to Android apps. Here are some of my projects.
        </div> */}
        <div className={styles.toggleButtonGroup}>
          <div className={`${styles.toggleButton} ${toggle === 'all' ? styles.active : ''}`} onClick={() => setToggle('all')}>
            ALL
          </div>
          <div className={styles.divider} />
          <div className={`${styles.toggleButton} ${toggle === 'web app' ? styles.active : ''}`} onClick={() => setToggle('web app')}>
            WEB APP'S
          </div>
          <div className={styles.divider} />
          <div className={`${styles.toggleButton} ${toggle === 'android app' ? styles.active : ''}`} onClick={() => setToggle('android app')}>
            Mobile APP'S
          </div>
          {/* <div className={styles.divider} />
          <div className={`${styles.toggleButton} ${toggle === 'machine learning' ? styles.active : ''}`} onClick={() => setToggle('machine learning')}>
            MACHINE LEARNING
          </div> */}
        </div>

        <div className={styles.cardContainer}>
          {filteredProjects.map((project) => (
            <ProjectCards key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;