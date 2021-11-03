import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Grass Company</title>
        <meta name="description" content="The Grass Company | From our farm to your yard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The Grass Company
        </h1>
      </main>

      <footer className={styles.footer}>
        Copyright 2021
      </footer>
    </div>
  )
}
