import { useRef, useState } from 'react';
import Layout from 'components/layout'
import styles from 'styles/Home.module.scss'
import { pages } from '@lib/constants';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import sanitizeHtml from 'sanitize-html';
import Alert from 'components/alert';
import AboutUs from 'components/about-us';
import OurGrass from 'components/our-grass';
import Testemonials from 'components/testemonials';

export default function Home() {
  const [isError, setIsError] = useState(null);
  const [showResponse, setShowResponse] = useState(false);
  const reRef = useRef();

  const { register, handleSubmit, formState: { errors }, control, reset } = useForm();

  async function handleOnSubmit(data) {

    const token = await reRef.current.executeAsync();
    reRef.current.reset();
    const formData = {
      data: {
        email: sanitizeHtml(data.email),
        message: sanitizeHtml(data.message),
        name: sanitizeHtml(data.name),
        phone: sanitizeHtml(data.phone)
      },
      token
    }

    fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.status === 400) {
          setIsError(true);
          setShowResponse(true);
          reset({
            email: '',
            message: '',
            name: '',
            phone: ''
          });
        }
        if (response.status === 200) {
          setShowResponse(true);
          setIsError(false)
          reset({
            email: '',
            message: '',
            name: '',
            phone: ''
          });
        }
      })
      .catch(error => {
        setShowResponse(true);
        setIsError(true)
        reset({
          email: '',
          message: '',
          name: '',
          phone: ''
        });
        // eslint-disable-next-line no-console
        console.log(error);
      });
    }

  return (
    <Layout title={pages.home.title}>
      <div>
        <section className={styles.hero}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Welcome to The Grass Company</h1>
            <h2 className={styles.hero__subtitle}>From our farm to your home</h2>
            <button className={styles.btn__primary} type="button">Contact Us</button>
          </div>
        </section>

        <OurGrass />

        <Testemonials />

        <AboutUs />
        
        <section className={styles.section__contact_us}>
          <h2 id="contact-us">Contact Us</h2>
          <p>Drop us a note, and we'll get back to you as soon as possible</p>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={reRef}
          />
          {showResponse && (
            isError ?
              <Alert type="error">Something went wrong! Please, try again.</Alert> :
              <Alert type="success">Thank you for contacting us. We'll get back to you as soon as possible</Alert>
          )}
          <form
            className={styles.form__contact_us}
            onSubmit={handleSubmit((data) => {
              handleOnSubmit(data);
            })}
          >

            {/* <label htmlFor="name">Your name:</label> */}
            <input
              type="text"
              placeholder="Enter your name ..."
              {...register('name', { required: 'Name is a required field' })}
              className={styles.field__clean}
            />
            {errors.name && <span className={styles.field__error}>{errors.name.message}</span>}
            {/* <label htmlFor="email">Your email:</label> */}
            <input
              type="email"
              placeholder="Enter your email ..."
              {...register('email', { required: true })}
              className={styles.field__clean}
            />
            {errors.email && <span className={styles.field__error}>Email is a required field</span>}

            {/* <label htmlFor="phone">Your phone(optional):</label> */}
            <Controller
              control={control}
              name="phone"
              rules={{ pattern: { value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, message: 'Please enter 10 digit phone number' }}}
              render={({ field: { onChange, name, value } }) => (
                <NumberFormat
                  format="(###)###-####"
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder="Enter your phone number (optional) ..."
                  className={styles.field__clean}
                  />
                  )}
            />
            {errors.phone && <span className={styles.field__error}>{errors.phone.message}</span>}
            <label htmlFor="message">Your message to us:</label>
            <textarea type="text" placeholder="Your message ..." {...register('message', { required: 'Please fill in the message', maxLength: 300 })} rows="10" maxLength="300" />
            {errors.message && <span className={styles.field__error}>{errors.message.message}</span>}
            <button type="submit">Send It</button>
          </form>
        </section>
      </div>
    </Layout>
  )
}
