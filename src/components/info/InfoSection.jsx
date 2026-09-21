import React from "react";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.headerBackground}>
        <h1 className={styles.pageTitle}>
          Why Choose Static Websites with BuildStatic?
        </h1>
      </div>

      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>What is a Static Website?</h2>
        <p className={styles.text}>
          A static website is a pre-built collection of HTML files that are
          served to users exactly as stored. Unlike dynamic websites, they don’t
          rely on real-time processing or databases, making them faster, more
          secure, and easier to host.
        </p>
        <p className={styles.alert}>
          ⚠️ Content and layout are fixed — users cannot edit them directly.
        </p>

        <h2 className={styles.heading}>
          Build Fast, Reliable Sites with BuildStatic
        </h2>
        <p className={styles.text}>
          BuildStatic enables you to craft high-performing, cost-efficient
          websites tailored for portfolios, landing pages, product sites, and
          documentation — all without complex backend systems.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
