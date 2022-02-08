import Image from 'next/image';
import Link from 'next/link';
import styles from './ReviewCard.module.scss';

const ReviewCard = ({ name, logo, content, reviewUrl }) => {
  return (
    <section className={styles.reviewCard}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.subheading}>
            <div className={styles.g_logo}>
              <Image src={logo} alt="review logo" height="50" width="50" />
            </div>
            <div className={styles.reviewer}>
              <p>{name}</p>
              <Image src="/assets/stars.webp" alt="5 stars" height="15" width="80" />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>{content}</p>
          {reviewUrl && (
            <Link href={reviewUrl}>
              <a>view full review</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;