import React from "react";
import styles from "./ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import project1 from "../../assets/passwordProject.png";

const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.projectContainer}>
            <ProjectCard
                link="#"
                src={project1}
                title="Password Generator"
                info="A stylish password generator using react"
            />
            <ProjectCard
                link="#"
                src={project1}
                title="Password Generator"
                info="A stylish password generator using react"
            />
            <ProjectCard
                link="#"
                src={project1}
                title="Password Generator"
                info="A stylish password generator using react"
            />
            <ProjectCard
                link="#"
                src={project1}
                title="Password Generator"
                info="A stylish password generator using react"
            />
            
            
        </div>
      </section>
    </>
  );
};

export default Projects;
