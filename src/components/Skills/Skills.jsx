import styles from "./Skills.module.css"; // Import CSS for styles
import { skills } from "../../constants/data";
import React from 'react';
const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>SKILLS</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <article className={styles.skill} key={index}>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <div className={styles.skillList}>
                {skill.skills.map((item, itemIndex) => (
                  <div className={styles.skillItem} key={itemIndex}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.skillImage}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
