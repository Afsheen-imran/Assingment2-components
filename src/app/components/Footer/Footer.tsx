// components/Footer.tsx
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Pharma Care. All rights reserved.</p>
      <div className={styles.socialLinks}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
