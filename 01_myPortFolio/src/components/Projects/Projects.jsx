import styles from "./Projects.module.css";
import ProjectCard from "../../common/ProjectCard";
import project1 from "../../assets/dinetimelogo.png";
import project2 from "../../assets/Company-logo.png";
import project3 from "../../assets/hero-img.png";
import project4 from "../../assets/tictactoeLogo.jpg";

const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectContainer}>

            <ProjectCard
                link="https://github.com/SudeepBhandari02/restaurantBookingMobileApp"
                src={project1}
                title="DineTime"
                info="Restaurant booking fullstack Mobile App"
            />

            <ProjectCard
                link="https://github.com/SudeepBhandari02/ToDesktopLandingPage_Tailwind"
                src={project2}
                title="ToDesktop"
                info="ToDesktop website clone using tailwind css"
            />

            <ProjectCard
                link="https://github.com/SudeepBhandari02/reactProjects/tree/main/01_myPortFolio"
                src={project3}
                title="MyPortFolio"
                info="A portfolio website built using react + vite"
            />
            
            <ProjectCard
                link="https://github.com/SudeepBhandari02/LearningReact/tree/main/07_ticTacToeGame"
                src={project4}
                title="Tictactoe game"
                info="A Tic-tac-toe react game with history functionality"
            />
            
        </div>
      </section>
    </>
  );
};

export default Projects;
