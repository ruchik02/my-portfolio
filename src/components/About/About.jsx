import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience in building responsive, optimized websites
                using React, Redux Toolkit, and Next.js. Skilled in creating
                interactive UIs and managing state efficiently in complex
                applications. Strong focus on performance optimization and
                delivering seamless user experiences across devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast and optimized systems using
                Node.js, Express, MongoDB, Hasura, and GraphQL. Proficient in
                building RESTful APIs, implementing server-side logic, and
                managing databases for scalable and efficient backend solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
                I have experience in building responsive and high-performance
                mobile applications using React Native and SwiftUI. Proficient
                in creating intuitive user experiences across iOS and Android
                platforms. Skilled in designing mobile UI components and
                integrating APIs for seamless app functionality.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
