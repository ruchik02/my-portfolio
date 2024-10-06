import styles from "./Education.module.css"
import { getImageUrl } from "../../utils";
export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Engineering in Computer Science</h3>
              <p>
              I pursued my Bachelor of Engineering in Computer Science at Chitkara University, Himachal Pradesh, from 2019 to 2023. I have maintained a stellar CGPA of 9.74, showcasing my commitment to academic excellence and a profound understanding of the subject matter.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Higher Secondary Education</h3>
              <p>
              During the academic year 2018-2019, I pursued the non-medical stream at S.D. Public School, and achieved an outstanding overall percentage of 89%. Notably, I excelled in Mathematics, demonstrating proficiency and a strong understanding of the subject. This educational experience not only solidified my foundation in core subjects but also fueled my passion for mathematics and logical reasoning.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>High School</h3>
              <p>
              During the academic year 2016-2017, I successfully completed my 10th-grade education at SD Public School. I proudly achieved a CGPA of 7.4, reflecting my consistent dedication to my studies.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};