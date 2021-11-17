import Layout from 'components/layout'
import styles from 'styles/Home.module.scss'
import { pages } from '@lib/constants';

export default function Home() {
  return (
    <Layout title={pages.home.title}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Welcome to The Grass Company</h1>
            <h2 className={styles.hero__subtitle}>From our farm to your home</h2>
          </div>
        </section>
      </div>
    </Layout>
  )
}
