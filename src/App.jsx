import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import { useState } from "react";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { Education } from "./components/Education/Education";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Education />
      <Contact />
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
}

export default App;
