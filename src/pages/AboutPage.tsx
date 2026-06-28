import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <div className={styles.about}>
      <Header />
      <main className={styles.about__main}>
        <Hero
          title="About Electrolysis"
          description="Electrolysis is the ONLY proven method of safe permanent hair removal today. The process is approved by the American Medical Association and the Food and Drug Administration."
          variant="about"
        />

        <div className={styles.about__content}>
          <article className={styles.about__article}>
            <h3 className={styles['about__article-title']}>What is Electrolysis?</h3>
            <p className={styles['about__article-text']}>Electrolysis is the ONLY proven method of safe permanent hair removal today. The process is approved by the American Medical Association and the Food and Drug Administration.</p>
          </article>
          <article className={styles.about__article}>
            <h3 className={styles['about__article-title']}>How is Electrolysis performed?</h3>
            <p className={styles['about__article-text']}>Each hair is treated individually. A fine filament is gently inserted into the hair follicle. A short burst of current is applied which destroys the hair follicle, eliminating further hair growth.</p>
          </article>
          <article className={styles.about__article}>
            <h3 className={styles['about__article-title']}>How does Electrolysis feel?</h3>
            <p className={styles['about__article-text']}>Sensitivity levels vary with each individual. The sensation is comparable to a warm tingle. Most clients find electrolysis to be a comfortable experience.</p>
          </article>
          <article className={styles.about__article}>
            <h3 className={styles['about__article-title']}>Can hair be removed from anywhere on the body?</h3>
            <p className={styles['about__article-text']}>Electrolysis works on all skin and hair types. It can be applied to most facial and body parts. Arch your eyebrows, remove troublesome facial and unwanted body hair.</p>
          </article>
          <article className={styles.about__article}>
            <h3 className={styles['about__article-title']}>How many treatments are required?</h3>
            <p className={styles['about__article-text']}>To eliminate all the growth cycles in an area, it takes a series of treatments, usually over a year's time. Treatment sessions can range from 15 minutes to an hour depending on the area being treated. Much of the growth is eliminated in the first few months and treatments are shorter and further apart thereafter.</p>
          </article>
          <article className={styles.about__article}>
            <h3 className={styles['about__article-title']}>Does Electrolysis have any side effects?</h3>
            <p className={styles['about__article-text']}>Immediately following treatment, slight occasional swelling and redness is possible. It may cause some bruising and scabbing, but will all heal with proper care after treatment.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
