// pages/contact.tsx


import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './contact.module.css';
import React from 'react';



export default function Contact() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.contactSection}>
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us at contact@pharmcare.com or call us at +1-800-555-5555.</p>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" className={styles.input} />
            <input type="email" placeholder="Your Email" className={styles.input} />
            <textarea placeholder="Your Message" className={styles.textarea}></textarea>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
