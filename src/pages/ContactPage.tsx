import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from './ContactPage.module.css';

export function ContactPage() {
  return (
    <div className={styles.contact}>
      <Header />
      <main className={styles.contact__main}>
        <div className={styles.contact__section}>
          <div className={styles.contact__header}>
            <h2 className={styles['contact__header-title']}>Hours &amp; Location</h2>
            <p className={styles['contact__header-description']}>Visit our studio or give us a call.</p>
          </div>

          <div className={styles.contact__grid}>
            <div className={styles.contact__details}>
              <ul className={styles.contact__list}>
                <li className={styles['contact__list-item']}>
                  <strong className={styles['contact__list-label']}>Address</strong>
                  <div className={styles['contact__list-value']}>4646 S. Highland Drive</div>
                  <div className={styles['contact__list-value']}>Salt Lake City, Utah 84117</div>
                </li>
                <li className={styles['contact__list-item']}>
                  <strong className={styles['contact__list-label']}>Phone</strong>
                  <a href="tel:8012770400" className={styles['contact__list-value-link']}>801-277-0400</a>
                </li>
                <li className={styles['contact__list-item']}>
                  <strong className={styles['contact__list-label']}>Hours</strong>
                  <ul className={styles['contact__list-sublist']}>
                    <li className={styles['contact__list-subitem']}>Mon–Thur: 10am – 6pm</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className={styles['contact__map-frame']}>
              <iframe
                src="https://www.google.com/maps?q=4646+S.+Highland+Drive,+Salt+Lake+City,+Utah+84117&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
