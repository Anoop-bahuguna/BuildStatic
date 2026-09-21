import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>BuildStatic</h2>
          <p>Crafting fast, modern, and stunning static websites that scale.</p>
        </div>

        <div className={styles.links}>
          <a href="/" className={styles.link}>
            Home
          </a>
          <a href="/features" className={styles.link}>
            Features
          </a>
          <a href="/pricing" className={styles.link}>
            Pricing
          </a>
          <a href="/contact" className={styles.link}>
            Contact
          </a>
        </div>

        <div className={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} BuildStatic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
