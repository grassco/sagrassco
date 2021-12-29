import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from 'styles/Styles.module.scss';
import { app } from '@lib/constants';
import Navigation from 'components/navigation';

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
      <Navigation />
      <main className={styles.main}>
        { children }
      </main>
      <footer className={styles.footer}>
        <p>
          <div>10519 Shire Country, San Antonio, TX 78254</div>
          <div>Howard Banks (210) 622-7225</div>
          <div>howardbanks@yahoo.com</div>
        </p>
        <hr />
        <span>
          Copyright &#169; {new Date().getFullYear()}, The Grass Company | Handcrafted by <a href="https://manoilov.me"> nmanoilov</a>
        </span>
      </footer>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Layout;