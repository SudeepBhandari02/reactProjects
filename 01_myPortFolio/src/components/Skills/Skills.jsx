import {useTheme} from "../../common/ThemeContext";
import styles from "./Skills.module.css";
import SkillCard from "../../common/SkillCard";
import checkDark from "../../assets/checkmark-dark.svg";
import checkLight from "../../assets/checkmark-light.svg";

const Skills = () => {

  const {theme} = useTheme();
  const url = theme === "light" ? checkLight : checkDark;
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        <SkillCard url={url} skill="HTML" />
        <SkillCard url={url} skill="CSS" />
        <SkillCard url={url} skill="JavaScript" />
        <SkillCard url={url} skill="React" />
        <SkillCard url={url} skill="React Native" />
      </div>
      <hr />
      <div className={styles.skills}>
        <SkillCard url={url} skill="Node.js" />
        <SkillCard url={url} skill="Next.js" />
        <SkillCard url={url} skill="Express" />
        <SkillCard url={url} skill="C++" />
        <SkillCard url={url} skill="Java" />
      </div>
      <hr />
      <div className={styles.skills}>
        <SkillCard url={url} skill="mySQL" />
        <SkillCard url={url} skill="MongoDB" />
        <SkillCard url={url} skill="FireBase" />
        <SkillCard url={url} skill="AWS" />
        <SkillCard url={url} skill="REST api" />
      </div>
         
    </section>
  );
};

export default Skills;
