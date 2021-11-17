import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from 'styles/Styles.module.scss';
import { app } from '@lib/constants';

const Layout = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>{`${app.title} | ${title}`}</title>
        <meta name="description" content={app.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" sizes="any" href="icon-svg" color={styles.primaryColor} />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="192x192" href="icon-ios.png" />
      </Head>
      <nav className={styles.navigation}>
        <span>Brand Logo</span>
        <ul>
          <li>Our Grass</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <main className={styles.main}>
        { children }
      </main>
      <footer className={styles.footer}>
        Copyright 2021 | Handcrafted by <a href="https://manoilov.me"> nmanoilov</a>
      </footer>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Layout;