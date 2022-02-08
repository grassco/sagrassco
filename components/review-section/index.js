import ReviewCard from 'components/review-card';
import styles from './ReviewSection.module.scss';

const ReviewSection = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.container}>
       <ReviewCard logo="/assets/marty.webp" name="Marty Gavranovic" content="Awesome place, very good people to deal with,  great grass, and awesome prices!" />
       <ReviewCard
        logo="/assets/donna.webp"
        name="Donna De Jesus"
        content="From start to finish, the best experience we ever had.  The price was great, the service was great and the grass was outstanding." 
        reviewUrl="https://www.google.com/maps/reviews/@29.4299812,-98.5665359,17z/data=!3m1!4b1!4m5!14m4!1m3!1m2!1s117565209904253362736!2s0x865c68ee62b4977d:0x268b8d060cf09fb2"
      />
       <ReviewCard
        logo="/assets/kalie.webp"
        name="Kalie Hansen"
        content="I called probably 7 different companies to inquire about grass.  The Grass Company/Howard were by far the best priced and most professional."
        reviewUrl="https://www.google.com/maps/reviews/@29.4299812,-98.5665359,17z/data=!3m1!4b1!4m5!14m4!1m3!1m2!1s103472281803932029540!2s0x865c68ee62b4977d:0x268b8d060cf09fb2"
      />
      </div>
    </section>
  );
};

export default ReviewSection;