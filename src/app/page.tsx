
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import styles from './home.module.css';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className={styles.main}>
        <section className={styles.servicesSection}>
          <h2 className={styles.heading}>Our Services</h2>
          <div className={styles.services}>
            <div className={styles.card}>
              <img 
                src="https://plus.unsplash.com/premium_photo-1664302336737-37fce6daca3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Consultation" 
                className={styles.cardImage} 
              />
              <h3>Consultation</h3>
              <p>Expert medical advice from top professionals.</p>
            </div>
            <div className={styles.card}>
              <img 
                src="https://cdn.pixabay.com/photo/2023/09/20/07/36/doctor-8264057_960_720.jpg" 
                alt="Pharmacy" 
                className={styles.cardImage} 
              />
              <h3>Pharmacy</h3>
              <p>Quality pharmaceutical products at your convenience.</p>
            </div>
            <div className={styles.card}>
              <img 
                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Research" 
                className={styles.cardImage} 
              />
              <h3>Research</h3>
              <p>Pioneering medical research for better healthcare.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
