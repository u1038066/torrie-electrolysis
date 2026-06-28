import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from './ServicesPage.module.css';

export function ServicesPage() {
  return (
    <div className={styles.services}>
      <Header />
      <main className={styles.services__main}>
        <div className={styles.services__panel}>
          <h2 className={styles.services__title}>Services & Pricing</h2>
          <p className={styles.services__description}>Below are our waxing services and the comparable electrolysis pricing and treatment times.</p>

          <table className={styles.services__table}>
            <thead>
              <tr className={styles['services__table-header']}>
                <th className={styles['services__table-header-cell']}>Waxing</th>
                <th className={styles['services__table-header-cell']}>Electrolysis</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Lip Wax — $16</td>
                <td className={styles['services__table-cell']}>15 mins — $35</td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Brow Wax — $20</td>
                <td className={styles['services__table-cell']}>30 mins — $60</td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Face Wax — $40</td>
                <td className={styles['services__table-cell']}>45 mins — $90</td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Underarm Wax — $28</td>
                <td className={styles['services__table-cell']}>60 mins — $120</td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Full Arm Wax — $40</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Bikini Wax — $40</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Deep Bikini Wax — $45</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Half Leg Wax — $40</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Half Leg with Bikini — $70</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Full Leg Wax — $75</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Full Leg with Bikini — $105</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
              <tr className={styles['services__table-row']}>
                <td className={styles['services__table-cell']}>Back Wax — $50</td>
                <td className={styles['services__table-cell']}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
