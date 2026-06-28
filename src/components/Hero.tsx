import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'default' | 'about';
}

export function Hero({
  title,
  description,
  showButton = false,
  buttonText = 'Learn More',
  buttonLink = '/services',
  variant = 'default'
}: HeroProps) {
  const heroClass = variant === 'about' ? `${styles.hero} ${styles['hero--about']}` : styles.hero;

  return (
    <section className={heroClass}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <h2 className={styles.hero__title}>{title}</h2>
          <p className={styles.hero__description}>{description}</p>
          {showButton && (
            <p>
              <Link to={buttonLink} className={styles.hero__cta}>
                {buttonText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
