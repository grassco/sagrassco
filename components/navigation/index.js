import styles from './Navigation.module.scss';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.header}>
        <div className={styles.socialIcons}>
          <Link href="https://facebook.com">
            <a><BsFacebook size={25} /></a>
          </Link>
          <Link href="https://instagram.com">
            <a><BsInstagram size={25} /></a>
          </Link>
          <Link href="https://youtube.com">
            <a><BsYoutube size={25} /></a>
          </Link>
        </div>
        <span>(210) 555-5555</span>
      </div>
      <nav className={styles.navigation}>
        <Link href="/">
          <a>
            <Image src="/logo-v3.png" alt="SA Grass Company logo" height="60" width="124" />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="#our-grass">
              <a>Our Grass</a>
            </Link>
          </li>
          <li>
            <Link href="#about-us">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="#contact-us">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Navigation;