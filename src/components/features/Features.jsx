import React from "react";
import styles from "./Features.module.css";
import features from "../../data/features.json";
import { FaHtml5, FaLaptopCode, FaRocket, FaPalette } from "react-icons/fa";

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaLaptopCode: <FaLaptopCode />,
  FaRocket: <FaRocket />,
  FaPalette: <FaPalette />,
};

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <h2 className={styles.heading}>Features of Static Website Design </h2>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{iconMap[feature.icon]}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.text}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
