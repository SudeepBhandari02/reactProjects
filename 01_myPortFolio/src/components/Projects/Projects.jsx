import styles from "./Projects.module.css";
import ProjectCard from "../../common/ProjectCard";
import project1 from "../../assets/passwordProject.png";
import project2 from "../../assets/project-quiz.webp";
import project3 from "../../assets/projectQr.webp";
import project4 from "../../assets/projectToast.jpg";

const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectContainer}>
            <ProjectCard
                link="https://github.com/SudeepBhandari02/Basic-JS-Projects/tree/main/4_PassGenerator"
                src={project1}
                title="Password Generator"
                info="A stylish password generator using react"
            />
            <ProjectCard
                link="https://github.com/SudeepBhandari02/Basic-JS-Projects/tree/main/3_QuizSite"
                src={project2}
                title="Quiz App"
                info="Scoring system based quiz app"
            />
            <ProjectCard
                link="https://github.com/SudeepBhandari02/Basic-JS-Projects/tree/main/6_QrCodeGenerator"
                src={project3}
                title="Qr Generator"
                info="URL to QR code generator"
            />
            <ProjectCard
                link="https://github.com/SudeepBhandari02/Basic-JS-Projects/tree/main/5_NotificationBar"
                src={project4}
                title="Notify App"
                info="A cool notification generator"
            />
            
            
        </div>
      </section>
    </>
  );
};

export default Projects;
