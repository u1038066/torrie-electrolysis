import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__text}>
          © 2026 Torrie's Electrolysis & Waxing | 4646 S. Highland Drive, Salt Lake City, Utah 84117 | 
          <a href="tel:8012770400" className={styles.footer__link}> 801-277-0400</a> | 
          <a href="https://www.google.com/maps?q=4646+S.+Highland+Drive,+Salt+Lake+City,+Utah+84117" target="_blank" rel="noopener" className={styles.footer__link}> Map</a>
        </p>
      </div>
    </footer>
  );
}
