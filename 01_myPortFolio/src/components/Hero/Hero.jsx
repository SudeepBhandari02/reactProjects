import React from "react";
import heroImage from "../../assets/hero-img.png";
import sunImage from "../../assets/sun.svg";
import moonImage from "../../assets/moon.svg";
import styles from "./HeroStyles.module.css"
import instaLight from '../../assets/instagram-light.svg';
import instaDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import {useTheme} from "../../common/ThemeContext.jsx"

function Hero() {
  const {theme,toggleTheme} = useTheme();
  const themeImg = theme==="light"?sunImage:moonImage;
  const githubImg = theme==="light"?githubLight:githubDark;
  const linkedinImg = theme==="light"?linkedinLight:linkedinDark;
  const instaImg = theme==="light"?instaLight:instaDark;

  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.heroContainer}>
          <img src={heroImage} alt="profile-image"  />
          <img src={themeImg} alt="theme-image" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
          <h1>
            Sudeep 
            <br /> 
            Bhandari 
          </h1>
          <h2>Full Stack Developer</h2>
          <span >
          <a href="https://instagram.com/" target="_blank">
            <img src={instaImg} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubImg} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinImg} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href="#" download>
          <button className="hover">Resume</button>
        </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
