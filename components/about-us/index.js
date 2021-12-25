import styles from './AboutUs.module.scss';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className={styles.about_us}>
      <h2 className={styles.title}>
        About Us
      </h2>
      <p className={styles.subtitle}>Get to know us</p>
      <div className={styles.about_us_content}>
        <Image src="/assets/aboutImage.png" alt="about us image" height="376" width="570" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tempor tempor. Ut pulvinar eget elit a elementum. Nam malesuada ultricies velit. Nullam in hendrerit est. Nullam eu volutpat enim. 
        
        Mauris nec aliquam quam, id ultricies erat. Curabitur eget risus eu ligula venenatis auctor fermentum laoreet dolor. Pellentesque et tristique felis, eget bibendum justo. Cras dignissim nisl quis diam euismod tempor.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;