import styles from "./HeroSection.module.css";
import heroBg from "../../images/hero/hero.png"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.greeting}>Welcome to BuildStatic</div>
          <h1 className={styles.title}>Build Lightning-Fast Static Websites</h1>
          <p className={styles.subtitle}>
            Create beautiful, responsive static sites in minutes — no servers,
            no stress.
          </p>
          <div className={styles.highlight}>
            <span role="img" aria-label="bolt">
              ⚡
            </span>{" "}
            Powered by modern frameworks and optimized for performance.
          </div>
          <div className={styles.buttons}>
            <a className={styles.primary}>Start Building</a>
            <a className={styles.secondary} href="#features">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
