import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About page",
  description: " About page description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p1 className={styles.desc}>
          We create digital ideas that will blow your mind. Working with us is
          surely going to be one of the best decissions that you will ever make.
          We help to birth your ideas and to give expressions to your most inner
          most contemplations. A trial will convince you. So give us a call
          today for your wide range of web and software development services.
        </p1>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p> Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p> Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p> Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about img" className={styles.img} fill />
      </div>
    </div>
  );
};

export default AboutPage;
