import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Contact.module.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    Name: '',
    Email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    Name: Yup.string().required('Name is required'),
    Email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string(),
  });

  return (
    <section className={styles.container}>
      <h2>Contact Me</h2>

      {isSubmitted ? (
        <div className={styles.thankYouMessage}>
          <h3>Thank you for contacting me!</h3>
          <p>I will reach out to you soon.</p>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // Create a form data object to simulate native form submit
            const form = document.createElement('form');
            form.method = 'POST';
            form.setAttribute('data-netlify', 'true');
            form.style.display = 'none';

            const appendField = (name, value) => {
              const input = document.createElement('input');
              input.name = name;
              input.value = value;
              input.type = 'hidden';
              form.appendChild(input);
            };

            appendField('form-name', 'contact');
            appendField('Name', values.Name);
            appendField('Email', values.Email);
            appendField('message', values.message);

            document.body.appendChild(form);
            form.submit();

            // Show thank you message
            setIsSubmitted(true);
            actions.resetForm();
          }}
        >
          {(formik) => (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={formik.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>

              <div className={styles.formGroup}>
                <Field type="text" name="Name" placeholder="Name" />
                <ErrorMessage name="Name" component="div" className={styles.error} />
              </div>

              <div className={styles.formGroup}>
                <Field type="email" name="Email" placeholder="Email" />
                <ErrorMessage name="Email" component="div" className={styles.error} />
              </div>

              <div className={styles.formGroup}>
                <Field as="textarea" name="message" placeholder="Message" />
                <ErrorMessage name="message" component="div" className={styles.error} />
              </div>

              <div className={styles.formGroup}>
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      )}
    </section>
  );
};

export default Contact;
