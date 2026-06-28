import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/images/cropped-torrie-electrolysis-waxing-logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__brand}>
          <Link to="/" className={styles['header__brand-link']}>
            <img className={styles['header__brand-img']} src={logo}></img>
            <h1>Torrie's Electrolysis & Waxing</h1>
          </Link>
        </div>

        <nav className={styles.header__nav}>
          <ul className={styles['header__nav-list']}>
            <li className={styles['header__nav-item']}>
              <Link to="/" className={styles['header__nav-link']}>Home</Link>
            </li>
            <li className={styles['header__nav-item']}>
              <Link to="/about" className={styles['header__nav-link']}>About</Link>
            </li>
            <li className={styles['header__nav-item']}>
              <Link to="/services" className={styles['header__nav-link']}>Services & Pricing</Link>
            </li>
            <li className={styles['header__nav-item']}>
              <Link to="/contact" className={styles['header__nav-link']}>Hours &amp; Location</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
