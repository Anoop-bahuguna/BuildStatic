import React from "react";
import pricingData from "../../data/pricingData.json";
import styles from "./PricingSection.module.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className={styles.pricingSection} id="pricing">
      <h2 className={styles.heading}> Pricing Plans</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th>Features</th>
              {pricingData.packages.map((pkg, index) => (
                <th
                  key={index}
                  className={pkg.highlight ? styles.highlightPlan : ""}
                >
                  <div className={styles.packageName}>{pkg.name}</div>
                  <div className={styles.price}>{pkg.price}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingData.features.map((feature, i) => (
              <tr key={i}>
                <td className={styles.featureName}>{feature.name}</td>
                {feature.values.map((val, j) => (
                  <td key={j}>
                    {val === true ? (
                      <FaCheck className={styles.check} />
                    ) : val === false ? (
                      <FaTimes className={styles.cross} />
                    ) : (
                      val
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingSection;
