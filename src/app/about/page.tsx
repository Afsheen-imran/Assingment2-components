import styles from '../about/about.module.css';
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.aboutSection}>
          <div className={styles.content}>
            <h1>About Pharma Care</h1>
            <p>At Pharma Care, we are committed to delivering the best healthcare services by combining compassion with cutting-edge technology. Our mission is to ensure that every patient has access to the care they deserve, through our expert consultation, high-quality pharmaceutical products, and pioneering medical research.</p>
            <p>With a team of dedicated professionals and state-of-the-art facilities, Pharma Care has been at the forefront of medical innovation, addressing critical health challenges while prioritizing patient well-being. We believe in a holistic approach to healthcare that not only treats but nurtures.</p>
          </div>
          <div className={styles.image}>
            <img src="https://media.tenor.com/unNOEdk_nEUAAAAM/nutraceutical-pills.gif" alt="Medicines" className={styles.medicineImage} />
            <img src="https://i.gifer.com/origin/f5/f52444b4acda18da485197df19c6d8c3_w200.webp" alt="Heart Health" className={styles.heartGif} />
          </div>
        </section>

        <section className={styles.moreImagesSection}>
          <div className={styles.imageRow}>
            <div className={styles.imageCard}>
              <img src="https://i.makeagif.com/media/4-11-2016/3sisSk.gif" alt="X-Ray" className={styles.gifImage} />
              <p>X-Ray Diagnostics</p>
            </div>
            <div className={styles.imageCard}>
              <img src="https://i.gifer.com/origin/51/516ea46b004919b79dcff18b40fa0dc8_w200.webp" alt="Medication" className={styles.gifImage} />
              <p>Medication & Treatments</p>
            </div>
            <div className={styles.imageCard}>
              <img src="https://static.wixstatic.com/media/4ae295_578a224af83040aa85f1563ce0794cde~mv2.gif" alt="Heart Surgery" className={styles.gifImage} />
              <p>Heart Surgery</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
