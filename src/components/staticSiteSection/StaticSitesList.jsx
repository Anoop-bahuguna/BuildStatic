// StaticSitesList.jsx
import React from "react";
import styles from "./StaticSitesList.module.css";
import staticSitesData from "./staticSitesData";

const StaticSitesList = () => {
  return (
    <div className={styles.wrapper} id="services">
      <h2 className={styles.heading}>Static Sites are Best Suited for</h2>
      <div className={styles.grid}>
        {staticSitesData.map((site, index) => (
          <div key={index} className={styles.card}>
            <img src={site.image} alt={site.title} className={styles.image} />
            <p className={styles.title}>{site.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticSitesList;
