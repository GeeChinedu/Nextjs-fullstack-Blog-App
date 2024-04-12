import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>GospelDev</div>
      <div className={styles.text}>
        Gospels Inspired thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
