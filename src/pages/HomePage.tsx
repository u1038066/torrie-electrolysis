import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.home__main}>
        <Hero
          title="Torrie's Electrolysis & Waxing"
          description="Expert Hair Removal for Women, Men and Teens"
          showButton={true}
          buttonText="Learn More"
          buttonLink="/services"
        />
        <IntroSection title="About us">
          <p>
            Torrie Bond is a licensed electrologist in Utah with a business
            experience of over 25 years in permanent hair removal and body waxing
            with specialization in the Blend Method, which combines heat and
            electric techniques. All of our electrolysis and waxing services are
            designed to make the hair removal process simple, affordable, and as
            painless as possible. You'll quickly be on your way to a
            self-confident, hair free you.
          </p>
          <p>Call for a free 15-minute consultation at 
            <a href='tel:8012770400'> 801-277-0400</a>
          </p>
        </IntroSection>
      </main>
      <Footer />
    </div>
  );
}
