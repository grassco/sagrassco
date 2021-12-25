import styles from './OurGrass.module.scss';
import Image from 'next/image';

const OurGrass = () => {
  return (
    <section className={styles.our_grass}>
      <h2 className={styles.title} id="our-grass">
        Our Grass
      </h2>
      <p className={styles.subtitle}>The best sods in the area</p>
      <div className={styles.our_grass_content}>
        <div className={styles.augustine}>
          <figure>
            <Image src="/assets/st-augustine.png" alt="st augustine grass image" width="315" height="236" />
            <figcaption>St. Augustine</figcaption>
          </figure>
          <div className={styles.grass_content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tempor tempor. Ut pulvinar eget elit a elementum. Nam malesuada ultricies velit. Nullam in hendrerit est. Nullam eu volutpat enim. Mauris nec aliquam quam, id ultricies erat. Curabitur eget risus eu ligula venenatis auctor fermentum laoreet dolor. Pellentesque et tristique felis, eget bibendum justo. Cras dignissim nisl quis diam euismod tempor.
          </div>
        </div>
        <div className={styles.bermuda}>
          <figure>
            <Image src="/assets/bermuda.png" alt="bermuda grass image" width="315" height="236" />
            <figcaption>Bermuda</figcaption>
          </figure>
          <div className={styles.grass_content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tempor tempor. Ut pulvinar eget elit a elementum. Nam malesuada ultricies velit. Nullam in hendrerit est. Nullam eu volutpat enim. Mauris nec aliquam quam, id ultricies erat. Curabitur eget risus eu ligula venenatis auctor fermentum laoreet dolor. Pellentesque et tristique felis, eget bibendum justo. Cras dignissim nisl quis diam euismod tempor.
          </div>
        </div>
        <div className={styles.zoysia}>
          <figure>
            <Image src="/assets/zoysia.png" alt="zoysia grass image" width="315" height="236" />
            <figcaption>Zoysia</figcaption>
          </figure>
          <div className={styles.grass_content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tempor tempor. Ut pulvinar eget elit a elementum. Nam malesuada ultricies velit. Nullam in hendrerit est. Nullam eu volutpat enim. Mauris nec aliquam quam, id ultricies erat. Curabitur eget risus eu ligula venenatis auctor fermentum laoreet dolor. Pellentesque et tristique felis, eget bibendum justo. Cras dignissim nisl quis diam euismod tempor.
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGrass;