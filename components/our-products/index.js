import styles from './OurProducts.module.scss';
import Image from 'next/image';

const OurProducts = () => {
  return (
    <section className={styles.our_products}>
      <h2 className={styles.title} id="our-grass">
        Our Products
      </h2>
      <p className={styles.subtitle}>The highest quality grass</p>
      <div className={styles.our_products_content}>
        <table className={styles.table} cellSpacing="0">
          <tr>
            <td>Bermuda Tifway 419</td>
            <td className={styles.price}>$160</td>
          </tr>
          <tr>
            <td>Bermuda Tif Tuf</td>
            <td>$175</td>
          </tr>
          <tr>
            <td>Raleigh St Augustine</td>
            <td>$199</td>
          </tr>
          <tr>
            <td>Palmetto St Augustine</td>
            <td>$215</td>
          </tr>
          <tr>
            <td>Palisades Zoysia</td>
            <td>$250</td>
          </tr>
          <tr>
            <td>Zeon Zoysia</td>
            <td>$270</td>
          </tr>
        </table>
        <figure className={styles.palletImage}>
          <Image src="/assets/pallet.webp" alt="pallet of grass" height="393" width="524" layout="responsive" />
        </figure>
        <div className={styles.sod}>
          <Image src="/assets/single-sod.webp" alt="single grass sod" height="172" width="277" layout="responsive" />
          <div className={styles.sodPrice}>
            <h4>Per piece</h4>
            <span>$2.00</span>
          </div>
        </div>    
      </div>
    </section>
  );
};

export default OurProducts;