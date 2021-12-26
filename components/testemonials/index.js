import ReviewSection from 'components/review-section';
import styles from './Testemonials.module.scss';

const Testemonials = () => {
  return (
    <section className={styles.testemonials}>
      <div className={styles.heading_container}>
        <h3 className={styles.heading}>See what our customers have to say</h3>
        <ReviewSection />
      </div>
    </section>
  );
};

export default Testemonials;