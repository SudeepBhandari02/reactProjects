import heroImage from "../../assets/profileImage.png";
import sunImage from "../../assets/sun.svg";
import moonImage from "../../assets/moon.svg";
import styles from "./HeroStyles.module.css";
import instaLight from "../../assets/instagram-light.svg";
import instaDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/Sudeep_Bhandari_Resume.pdf"
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeImg = theme === "light" ? sunImage : moonImage;
  const githubImg = theme === "light" ? githubLight : githubDark;
  const linkedinImg = theme === "light" ? linkedinLight : linkedinDark;
  const instaImg = theme === "light" ? instaLight : instaDark;

  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.heroContainer}>
          <img src={heroImage} alt="profile-image" className={styles.hero} />
          <img src={themeImg} alt="theme-image" onClick={toggleTheme} className={styles.colorMode}/>
        </div>
        <div className={styles.info}>
          <h1>
            Sudeep
            <br />
            Bhandari
          </h1>
          <h2>Fullstack Developer</h2>
          <span className={styles.linkContainer}>
            <a href="https://www.instagram.com/soo__deeep?igsh=MWNqZDRvZmd0OW1obw==" target="_blank">
              <img src={instaImg} alt="Twitter icon" />
            </a>
            <a href="https://github.com/SudeepBhandari02" target="_blank">
              <img src={githubImg} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/sudeepbhandari02" target="_blank">
              <img src={linkedinImg} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion for developing modern React web apps for commercial
            businesses.
          </p>
          <a className="resumeLink" href={resume} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
