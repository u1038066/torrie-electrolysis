import styles from './IntroSection.module.css';

interface IntroSectionProps {
  title: string;
  children: React.ReactNode;
}

export function IntroSection({ title, children }: IntroSectionProps) {
  return (
    <section className={styles.intro}>
      <h3 className={styles.intro__title}>{title}</h3>
      <div className={styles.intro__content}>
        {children}
      </div>
    </section>
  );
}
