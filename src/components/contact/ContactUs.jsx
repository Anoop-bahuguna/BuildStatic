import React from "react";
import styles from "./ContactUs.module.css";
import { FaTelegramPlane, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <h2 className={styles.heading}>Let’s Connect</h2>
          <h3 className={styles.subheading}>Reach Out Instantly</h3>
          <p className={styles.description}>
            Whether you have a project in mind or just want to say hello, we’re
            here and ready to chat. Use your favorite messaging app to get in
            touch instantly!
          </p>

          <div className={styles.links}>
            <a
              href="https://t.me/yourTelegramUsername"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className={styles.icon} />
              Telegram
            </a>

            <a
              href="https://wa.me/yourPhoneNumber"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.icon} />
              WhatsApp
            </a>

            <a
              href="mailto:your@email.com"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className={styles.icon} />
              Email
            </a>
          </div>

          <p className={styles.infoNote}>
            We’re just a click away! Click the icons above to connect with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
