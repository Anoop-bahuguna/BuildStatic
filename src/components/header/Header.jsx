import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <a href="#">
          <div className={styles.logo}>BuildStatic</div>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#pricing">Pricing</a>
          <a href="#services">Services</a>
        </nav>

        <div
          className={styles["menu-toggle"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <b className={styles.bar}></b>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
